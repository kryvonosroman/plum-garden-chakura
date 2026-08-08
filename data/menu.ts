import { placeholderImages } from "@/lib/placeholderImages";

export type DietaryTag = "spicy" | "veg" | "popular";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  // Real prices haven't been confirmed with the client yet — omit `price`
  // rather than guess. MenuCard hides the price line when it's unset.
  price?: string;
  tags?: DietaryTag[];
  image?: (typeof placeholderImages)[keyof typeof placeholderImages];
  featured?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "katsu",
    name: "Katsu",
    items: [
      {
        id: "chicken-katsu-sandwich",
        name: "Chicken Katsu Sandwich",
        description:
          "Panko-breaded crispy chicken cutlet, shredded cabbage, and katsu sauce on soft milk bread.",
        tags: ["popular"],
        image: placeholderImages.katsu,
        featured: true,
      },
      {
        id: "chicken-katsu-plate",
        name: "Chicken Katsu Plate",
        description:
          "Crispy chicken katsu served over steamed rice with house katsu sauce and pickled sides.",
        image: placeholderImages.katsu,
      },
    ],
  },
  {
    id: "rice-bowls",
    name: "Rice Bowls",
    items: [
      {
        id: "karage-don",
        name: "Karage Don (Crispy Chicken Rice Bowl)",
        description:
          "Japanese-style crispy fried chicken over seasoned rice with house sauce and toppings.",
        tags: ["popular"],
        image: placeholderImages.riceBowl,
        featured: true,
      },
      {
        id: "teriyaki-chicken-don",
        name: "Teriyaki Chicken Don",
        description: "Grilled teriyaki chicken over rice with seasonal vegetables.",
        image: placeholderImages.riceBowl,
      },
    ],
  },
  {
    id: "noodles",
    name: "Noodles",
    items: [
      {
        id: "spicy-steamed-chicken-noodles",
        name: "Spicy Steamed Chicken Stirred Noodles",
        description:
          "Stir-fried noodles tossed with steamed chicken in a spicy house sauce.",
        tags: ["spicy", "popular"],
        image: placeholderImages.stirFryNoodles,
        featured: true,
      },
      {
        id: "veggie-stirred-noodles",
        name: "Veggie Stirred Noodles",
        description: "Stir-fried noodles with a seasonal mix of fresh vegetables.",
        tags: ["veg"],
        image: placeholderImages.stirFryNoodles,
      },
    ],
  },
  {
    id: "hotpot",
    name: "Hotpot",
    items: [
      {
        id: "signature-hotpot",
        name: "Signature Hotpot",
        // Broth flavors and included ingredients still need confirming with the client.
        description:
          "A simmering hotpot with a rotating selection of meats, seafood, and vegetables.",
        image: placeholderImages.hotpot,
        featured: true,
      },
    ],
  },
  {
    id: "tea-bubble-tea",
    name: "Tea & Bubble Tea",
    items: [
      {
        id: "brown-sugar-pearl-milk-tea",
        name: "Brown Sugar Pearl Milk Tea with Cheese Foam",
        description:
          "Brown sugar milk tea with chewy tapioca pearls, topped with a savory-sweet cheese foam.",
        tags: ["popular"],
        image: placeholderImages.bubbleTea,
        featured: true,
      },
      {
        id: "fresh-fruit-tea",
        name: "Fresh Fruit Tea",
        // Rotating/seasonal fruit tea flavors still need to be listed out.
        description: "Iced tea loaded with real fruit bits.",
        tags: ["popular"],
        image: placeholderImages.fruitTea,
        featured: true,
      },
      {
        id: "charcoal-oolong-milk-tea",
        name: "Charcoal Oolong Milk Tea with Pearls",
        description: "Roasted charcoal oolong milk tea with chewy tapioca pearls.",
        image: placeholderImages.bubbleTea,
        featured: true,
      },
    ],
  },
  {
    id: "sides-extras",
    name: "Sides & Extras",
    items: [
      {
        id: "side-edamame",
        name: "Edamame",
        description: "Steamed and lightly salted soybeans.",
        tags: ["veg"],
      },
      {
        id: "extra-pearls",
        name: "Extra Tapioca Pearls",
        description: "Add extra chewy tapioca pearls to any tea.",
        tags: ["veg"],
      },
    ],
  },
];

export const featuredItems: MenuItem[] = menu
  .flatMap((category) => category.items)
  .filter((item) => item.featured);
