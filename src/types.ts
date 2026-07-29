/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  childAge: string;
  rating: number;
  text: string;
  avatar?: string;
}

export interface Bonus {
  id: string;
  title: string;
  description: string;
  value: number;
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Config {
  META_PIXEL_ID: string;
  HOTMART_CHECKOUT_URL: string;
  APP_URL: string;
}
