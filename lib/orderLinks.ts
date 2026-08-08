export type OrderPlatform = "uberEats" | "fantuan";

export const orderLinks: Record<OrderPlatform, string> = {
  uberEats:
    "https://www.ubereats.com/ca/store/plum-garden-%26-chakura/67gwGUrxQkulfOmElLYyiw",
  fantuan: "https://www.fantuanorder.com/store/plum-garden-chakura/ca-12879",
};

export const orderPlatformMeta: Record<
  OrderPlatform,
  { label: string; accent: string; accentHover: string }
> = {
  uberEats: {
    label: "Uber Eats",
    accent: "#06C167",
    accentHover: "#049655",
  },
  fantuan: {
    label: "Fantuan",
    accent: "#FFC300",
    accentHover: "#E0AC00",
  },
};

// Fires whenever a visitor clicks through to an ordering platform.
// TODO: wire up real analytics (e.g. `gtag('event', 'order_click', { platform })`)
export function trackOrderClick(platform: OrderPlatform) {
  console.log(`[order-click] platform=${platform}`);
}
