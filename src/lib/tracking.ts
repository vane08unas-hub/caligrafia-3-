/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Helper to generate a unique event_id for Meta Pixel & CAPI deduplication
export function generateEventId(eventName: string): string {
  const rand = Math.random().toString(36).substring(2, 9);
  return `evt_${eventName.toLowerCase()}_${Date.now()}_${rand}`;
}

// SHA256 hashing helper in pure browser JS (for hashing email, phone safely on client)
export async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

interface TrackParams {
  pixelId: string;
  eventName: string;
  customData?: any;
  userEmail?: string;
  userPhone?: string;
}

// Track an event via both client-side Meta Pixel and server-side Conversions API (CAPI)
export async function trackEvent({
  pixelId,
  eventName,
  customData = {},
  userEmail = "",
  userPhone = ""
}: TrackParams) {
  const eventId = generateEventId(eventName);
  
  // Format dates / context
  const eventSourceUrl = window.location.href;
  const enrichedCustomData = {
    ...customData,
    eventSourceUrl,
  };

  // Prepare user data hashes
  let emHash = "";
  let phHash = "";
  if (userEmail) emHash = await sha256(userEmail);
  if (userPhone) phHash = await sha256(userPhone);

  const userData = {
    em: emHash || undefined,
    ph: phHash || undefined
  };

  // 1. Client-Side Meta Pixel Tracking
  try {
    if (typeof window !== "undefined" && (window as any).fbq) {
      if (eventName === "PageView") {
        (window as any).fbq("track", "PageView", {}, { eventID: eventId });
      } else {
        (window as any).fbq("track", eventName, enrichedCustomData, { eventID: eventId });
      }
      console.log(`[CLIENT TRACK] Meta Pixel '${eventName}' enviado con ID: ${eventId}`);
    } else {
      console.log(`[CLIENT TRACK MOCK] Meta Pixel no cargado aún. Simulación '${eventName}' con ID: ${eventId}`);
    }
  } catch (err) {
    console.error("[CLIENT TRACK ERROR] Error en Meta Pixel client-side:", err);
  }

  // 2. Server-Side Conversions API (CAPI) Tracking
  try {
    const response = await fetch("/api/fb-track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eventName,
        eventId,
        customData: enrichedCustomData,
        userData
      }),
    });
    const result = await response.json();
    console.log(`[CAPI TRACK RESP] Respuesta del servidor para '${eventName}':`, result);
  } catch (err) {
    console.error("[CAPI TRACK ERROR] Error enviando evento a CAPI proxy:", err);
  }
}

// Inject Facebook Pixel Script dynamically
export function initMetaPixel(pixelId: string) {
  if (!pixelId || pixelId === "1234567890") {
    console.log("[PIXEL INIT] Usando Pixel ID de prueba/demo:", pixelId);
  }
  
  if (typeof window === "undefined") return;
  const w = window as any;
  if (w.fbq) return;

  w._fbq = w.fbq = function() {
    w.fbq.callMethod ? w.fbq.callMethod.apply(w.fbq, arguments) : w.fbq.queue.push(arguments);
  };
  if (!w._fbq) w._fbq = w.fbq;
  w.fbq.push = w.fbq;
  w.fbq.loaded = true;
  w.fbq.version = "2.0";
  w.fbq.queue = [];

  const s = document.createElement("script");
  s.async = true;
  s.src = "https://connect.facebook.net/en_US/fbevents.js";
  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript && firstScript.parentNode) {
    firstScript.parentNode.insertBefore(s, firstScript);
  } else {
    document.head.appendChild(s);
  }

  w.fbq("init", pixelId);
  console.log(`[PIXEL INIT] Meta Pixel inicializado correctamente con ID: ${pixelId}`);
}
