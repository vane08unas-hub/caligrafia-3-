import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Log server start-up configurations safely
console.log("[CONFIG] Initializing Mega Pack Caligrafía Infantil Landing Server...");
console.log("[CONFIG] META_PIXEL_ID:", process.env.META_PIXEL_ID ? "✓ Conectado" : "✗ No configurado (Usando predeterminado demo)");
console.log("[CONFIG] META_ACCESS_TOKEN:", process.env.META_ACCESS_TOKEN ? "✓ Conectado" : "✗ No configurado (Modo local/consola)");
console.log("[CONFIG] HOTMART_CHECKOUT_URL:", process.env.HOTMART_CHECKOUT_URL ? "✓ Conectado" : "✗ No configurado (Usando link demo)");

// Fallback values for running seamlessly in the sandbox environment
const DEFAULT_PIXEL_ID = process.env.META_PIXEL_ID || "1636680907436275";
const DEFAULT_CHECKOUT_URL = process.env.HOTMART_CHECKOUT_URL || "https://vanessadigital.myshopify.com/cart/43140666949730:1";

// API endpoints
app.get("/api/config", (req, res) => {
  res.json({
    META_PIXEL_ID: process.env.META_PIXEL_ID || DEFAULT_PIXEL_ID,
    HOTMART_CHECKOUT_URL: process.env.HOTMART_CHECKOUT_URL || DEFAULT_CHECKOUT_URL,
    APP_URL: process.env.APP_URL || "http://localhost:3000"
  });
});

// Meta Conversions API (CAPI) Event Receiver & Proxy
app.post("/api/fb-track", async (req, res) => {
  const { eventName, eventId, customData, userData } = req.body;
  
  const pixelId = process.env.META_PIXEL_ID || DEFAULT_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;
  const clientIp = req.ip || req.headers["x-forwarded-for"] || "127.0.0.1";
  const userAgent = req.headers["user-agent"] || "Mozilla/5.0";

  console.log(`[CAPI EVENT] Recibido evento '${eventName}' en el servidor. Event ID: ${eventId}`);

  // Build the standardized Meta Graph API payload
  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: customData?.eventSourceUrl || "https://mega-pack-caligrafia-infantil.com",
        action_source: "website",
        user_data: {
          client_ip_address: clientIp,
          client_user_agent: userAgent,
          em: userData?.em || undefined, // SHA256 hashed email if provided
          ph: userData?.ph || undefined, // SHA256 hashed phone if provided
        },
        custom_data: {
          value: customData?.value || undefined,
          currency: customData?.currency || "USD",
          content_name: customData?.contentName || "Mega Pack de Caligrafía Infantil",
          content_type: customData?.contentType || "product",
          contents: customData?.contents || [{ id: "caligrafia_mega_pack", quantity: 1 }]
        }
      }
    ]
  };

  if (!accessToken) {
    // If no access token is configured, print the exact payload to console and simulate success
    console.log("[CAPI MOCK MODE] Meta CAPI no está activo (Falta META_ACCESS_TOKEN). Registro de simulación local:");
    console.log(JSON.stringify(payload, null, 2));
    return res.json({ 
      success: true, 
      status: "mock_success", 
      message: "Evento registrado localmente en consola. Agrega META_ACCESS_TOKEN para producción.",
      eventId 
    });
  }

  try {
    const url = `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log(`[CAPI API RESP] Respuesta de Facebook para ${eventName}:`, result);
    return res.json({ success: true, status: "live_success", result, eventId });
  } catch (error: any) {
    console.error(`[CAPI ERROR] Error al enviar evento ${eventName} a Facebook:`, error?.message || error);
    // Do not crash the app, return a graceful response so client is uninterrupted
    return res.status(200).json({ 
      success: false, 
      error: "No se pudo enviar a la API de Facebook, pero la navegación del cliente continuará de forma segura.",
      eventId 
    });
  }
});

// Configure Vite or Static Files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[SERVER] Mega Pack Caligrafía Server corriendo en http://localhost:${PORT}`);
  });
}

startServer();
