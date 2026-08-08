import { placeholderImages } from "@/lib/placeholderImages";

export type DietaryTag = "spicy" | "veg" | "popular";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  // TODO: every price below is a placeholder — confirm real prices with the client.
  price: string;
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
        price: "$–", // TODO: add real price
        tags: ["popular"],
        image: placeholderImages.katsu,
        featured: true,
      },
      {
        id: "chicken-katsu-plate",
        name: "Chicken Katsu Plate",
        description:
          "Crispy chicken katsu served over steamed rice with house katsu sauce and pickled sides.",
        price: "$–", // TODO: add real price
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
        price: "$–", // TODO: add real price
        tags: ["popular"],
        image: placeholderImages.riceBowl,
        featured: true,
      },
      {
        id: "teriyaki-chicken-don",
        name: "Teriyaki Chicken Don",
        description: "Grilled teriyaki chicken over rice with seasonal vegetables.",
        price: "$–", // TODO: add real price
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
        price: "$–", // TODO: add real price
        tags: ["spicy", "popular"],
        image: placeholderImages.stirFryNoodles,
        featured: true,
      },
      {
        id: "veggie-stirred-noodles",
        name: "Veggie Stirred Noodles",
        description: "Stir-fried noodles with a seasonal mix of fresh vegetables.",
        price: "$–", // TODO: add real price
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
        description:
          "A simmering hotpot with a rotating selection of meats, seafood, and vegetables. TODO: confirm broth flavors and included ingredients.",
        price: "$–", // TODO: add real price
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
        price: "$–", // TODO: add real price
        tags: ["popular"],
        image: placeholderImages.bubbleTea,
        featured: true,
      },
      {
        id: "fresh-fruit-tea",
        name: "Fresh Fruit Tea",
        description:
          "Iced tea loaded with real fruit bits. TODO: list rotating/seasonal fruit tea flavors.",
        price: "$–", // TODO: add real price
        tags: ["popular"],
        image: placeholderImages.fruitTea,
        featured: true,
      },
      {
        id: "charcoal-oolong-milk-tea",
        name: "Charcoal Oolong Milk Tea with Pearls",
        description: "Roasted charcoal oolong milk tea with chewy tapioca pearls.",
        price: "$–", // TODO: add real price
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
        price: "$–", // TODO: add real price
        tags: ["veg"],
      },
      {
        id: "extra-pearls",
        name: "Extra Tapioca Pearls",
        description: "Add extra chewy tapioca pearls to any tea.",
        price: "$–", // TODO: add real price
        tags: ["veg"],
      },
    ],
  },
];

export const featuredItems: MenuItem[] = menu
  .flatMap((category) => category.items)
  .filter((item) => item.featured);
