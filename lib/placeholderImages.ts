// TODO: Every image below is a stock placeholder from Unsplash, not a real
// photo of Plum Garden & CHAKURA's food, drinks, or space. Swap each entry's
// `src` for real photography before launch (see README.md for how).
export type PlaceholderImage = {
  src: string;
  alt: string;
  credit: string;
};

export const placeholderImages = {
  heroRamen: {
    src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=2400&q=80",
    alt: "Placeholder photo of a ramen-style noodle bowl with soft egg",
    credit: "Unsplash — TODO replace with real hero photo",
  },
  katsu: {
    src: "https://images.unsplash.com/photo-1585039261108-ec658b915e37?auto=format&fit=crop&w=1200&q=80",
    alt: "Placeholder photo of crispy fried chicken katsu",
    credit: "Unsplash — TODO replace with real Chicken Katsu Sandwich photo",
  },
  riceBowl: {
    src: "https://images.unsplash.com/photo-1679279726946-a158b8bcaa23?auto=format&fit=crop&w=1200&q=80",
    alt: "Placeholder photo of a rice bowl topped with meat and sauce",
    credit: "Unsplash — TODO replace with real Karage Don photo",
  },
  stirFryNoodles: {
    src: "https://images.unsplash.com/photo-1578419997901-b409e7e400b8?auto=format&fit=crop&w=1200&q=80",
    alt: "Placeholder photo of stir-fried noodles",
    credit: "Unsplash — TODO replace with real Spicy Steamed Chicken Stirred Noodles photo",
  },
  hotpot: {
    src: "https://images.unsplash.com/photo-1550388341-d3d5ac2a724e?auto=format&fit=crop&w=1200&q=80",
    alt: "Placeholder photo of a hotpot simmering with ingredients",
    credit: "Unsplash — TODO replace with real hotpot photo",
  },
  bubbleTea: {
    src: "https://images.unsplash.com/photo-1745883949374-baeba0ed57c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Placeholder photo of a hand holding a bubble tea",
    credit: "Unsplash — TODO replace with real Brown Sugar Pearl Milk Tea photo",
  },
  fruitTea: {
    src: "https://images.unsplash.com/photo-1655992590262-aeadeef445b1?auto=format&fit=crop&w=1200&q=80",
    alt: "Placeholder photo of a fruit tea with real fruit pieces",
    credit: "Unsplash — TODO replace with real fresh fruit tea photo",
  },
  interior: {
    src: "https://images.unsplash.com/photo-1741705407719-511609581dd1?auto=format&fit=crop&w=1600&q=80",
    alt: "Placeholder photo of a restaurant interior with Japanese-style wall art",
    credit: "Unsplash — TODO replace with a real interior photo of the restaurant",
  },
} satisfies Record<string, PlaceholderImage>;
