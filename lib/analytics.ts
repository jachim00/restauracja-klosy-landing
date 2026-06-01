/**
 * Warstwa analityki — dataLayer + GTM. Wszystkie eventy opisane w docs/TRACKING_PLAN.md.
 * Meta Pixel / Google Ads / LinkedIn / TikTok podpina się w GTM po stronie konta;
 * tutaj trzymamy tylko spójny push do dataLayer (jedno źródło prawdy zdarzeń).
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type AnalyticsEvent =
  | "page_view"
  | "phone_click"
  | "email_click"
  | "directions_click"
  | "fb_click"
  | "instagram_click"
  | "pyszne_click"
  | "glovo_click"
  | "menu_view"
  | "menu_download"
  | "offer_tab_click"
  | "event_type_select"
  | "guest_count_change"
  | "gallery_open"
  | "gallery_filter_click"
  | "form_start"
  | "form_step_complete"
  | "form_submit"
  | "form_submit_success"
  | "form_submit_error"
  | "scroll_25"
  | "scroll_50"
  | "scroll_75"
  | "scroll_90"
  | "cta_click_hero"
  | "cta_click_event"
  | "cta_click_contact"
  | "pdf_offer_download";

export function pushDataLayerEvent(
  eventName: AnalyticsEvent,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}

/** Skróty dla najczęstszych zdarzeń konwersji. */
export const track = {
  phoneClick: (location: string, phone: string) =>
    pushDataLayerEvent("phone_click", { phone_number: phone, location }),
  emailClick: (location: string) =>
    pushDataLayerEvent("email_click", { location }),
  offerTab: (tabName: string) =>
    pushDataLayerEvent("offer_tab_click", { tab_name: tabName }),
  eventTypeSelect: (eventType: string) =>
    pushDataLayerEvent("event_type_select", { event_type: eventType }),
  guestCount: (range: string) =>
    pushDataLayerEvent("guest_count_change", { guest_count: range }),
  galleryOpen: (image: string) =>
    pushDataLayerEvent("gallery_open", { image }),
  galleryFilter: (filter: string) =>
    pushDataLayerEvent("gallery_filter_click", { filter }),
  ctaHero: (label: string) => pushDataLayerEvent("cta_click_hero", { label }),
  formSubmitSuccess: (p: Record<string, unknown>) =>
    pushDataLayerEvent("form_submit_success", { form_name: "event_inquiry", lead_source: "website", ...p }),
  formSubmitError: (reason: string) =>
    pushDataLayerEvent("form_submit_error", { form_name: "event_inquiry", reason }),
};
