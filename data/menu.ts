import { placeholderImages } from "@/lib/placeholderImages";

export type DietaryTag = "spicy" | "veg" | "popular";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  // Real prices pulled from the live Uber Eats listing (Aug 2026) — spot-check
  // before publishing since delivery-platform prices can run higher than
  // in-store and drift over time.
  price?: string;
  tags?: DietaryTag[];
  image?: { src: string; alt: string; credit?: string };
  featured?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "rice-bowl",
    name: "Rice Bowls",
    items: [
      {
        id: "chicken-karaage-curry-rice-bowl",
        name: "Chicken Karaage Curry Rice Bowl",
        description: "Crispy fried chicken nuggets served over a bed of rice.",
        price: "$19.25",
        image: { src: "/menu/chicken-karaage-curry-rice-bowl.jpeg", alt: "Chicken Karaage Curry Rice Bowl", credit: "Restaurant's own Uber Eats listing photo" },
      },
      {
        id: "chicken-katsu-curry-rice-bowl",
        name: "Chicken Katsu Curry Rice Bowl",
        description: "Japanese-style deep-fried chicken cutlet served with curry sauce.",
        price: "$19.25",
        image: { src: "/menu/chicken-katsu-curry-rice-bowl.jpeg", alt: "Chicken Katsu Curry Rice Bowl", credit: "Restaurant's own Uber Eats listing photo" },
      },
      {
        id: "grilled-beef-rice-bowl",
        name: "Grilled Beef Rice Bowl",
        description: "Grilled sliced beef over rice, finished with a savoury glaze and served with mixed greens.",
        price: "$20.85",
        tags: ["popular"],
        image: { src: "/menu/grilled-beef-rice-bowl.jpeg", alt: "Grilled Beef Rice Bowl", credit: "Restaurant's own Uber Eats listing photo" },
        featured: true,
      },
      {
        id: "grilled-chicken-rice-bowl",
        name: "Grilled Chicken Rice Bowl",
        description: "Grilled chicken over white rice with edamame and spinach, finished with sesame seeds and a light sauce.",
        price: "$19.25",
        image: { src: "/menu/grilled-chicken-rice-bowl.jpeg", alt: "Grilled Chicken Rice Bowl", credit: "Restaurant's own Uber Eats listing photo" },
      },
      {
        id: "beef-burger-steak-rice-bowl",
        name: "Beef Burger Steak Rice Bowl",
        description: "Juicy beef steak served with a side of rice.",
        price: "$20.85",
        image: { src: "/menu/beef-burger-steak-rice-bowl.jpeg", alt: "Beef Burger Steak Rice Bowl", credit: "Restaurant's own Uber Eats listing photo" },
      },
      {
        id: "chicken-katsu-sauce-rice-bowl",
        name: "Chicken Katsu Sauce Rice Bowl",
        description: "Savoury rice bowl with a rich Katsu sauce.",
        price: "$19.25",
        image: { src: "/menu/chicken-katsu-sauce-rice-bowl.jpeg", alt: "Chicken Katsu Sauce Rice Bowl", credit: "Restaurant's own Uber Eats listing photo" },
      },
      {
        id: "chicken-karaage-sauce-rice-bowl",
        name: "Chicken Karaage Sauce Rice Bowl",
        description: "Japanese-style fried chicken karaage over steamed rice, drizzled with karaage sauce and mayo.",
        price: "$19.25",
        image: { src: "/menu/chicken-karaage-sauce-rice-bowl.jpeg", alt: "Chicken Karaage Sauce Rice Bowl", credit: "Restaurant's own Uber Eats listing photo" },
      },
      {
        id: "daily-bento",
        name: "Daily Bento",
        description: "Chef's choice bento — contents vary day to day.",
        price: "$16.25",
        image: { src: "/menu/daily-bento.jpeg", alt: "Daily Bento", credit: "Restaurant's own Uber Eats listing photo" },
      },
      {
        id: "veg-tofu-rice-bowl",
        name: "VEG Tofu Rice Bowl",
        description: "Tofu, korokke, and daily salad over rice.",
        price: "$15.58",
        tags: ["veg"],
        image: { src: "/menu/veg-tofu-rice-bowl.jpeg", alt: "VEG Tofu Rice Bowl", credit: "Restaurant's own Uber Eats listing photo" },
      },
    ],
  },
  {
    id: "hot-pot",
    name: "Hot Pot",
    items: [
      {
        id: "spicy-fish-hot-pot",
        name: "Spicy Fish Hot Pot",
        description: "Thinly sliced fish served in a savory soup.",
        price: "$17.58",
        tags: ["popular", "spicy"],
        image: { src: "/menu/spicy-fish-hot-pot.jpeg", alt: "Spicy Fish Hot Pot", credit: "Restaurant's own Uber Eats listing photo" },
        featured: true,
      },
      {
        id: "fish-sour-cabbage-hot-pot",
        name: "Fish Sour Cabbage Hot Pot",
        description: "Simmering hot pot served with a side of rice.",
        price: "$17.58",
        image: { src: "/menu/fish-sour-cabbage-hot-pot.jpeg", alt: "Fish Sour Cabbage Hot Pot", credit: "Restaurant's own Uber Eats listing photo" },
      },
      {
        id: "spicy-beef-hot-pot",
        name: "Spicy Beef Hot Pot",
        description: "Simmering hot pot served with a side of rice.",
        price: "$18.85",
        tags: ["spicy"],
        image: placeholderImages.hotpot,
      },
      {
        id: "spicy-karaage-hot-pot",
        name: "Spicy Karaage Hot Pot",
        description: "Simmering hot pot served with a side of rice.",
        price: "$17.85",
        tags: ["spicy"],
        image: placeholderImages.hotpot,
      },
      {
        id: "beef-sour-cabbage-hot-pot",
        name: "Beef Sour Cabbage Hot Pot",
        description: "Simmering hot pot served with a side of rice.",
        price: "$18.85",
        tags: ["popular"],
        image: placeholderImages.hotpot,
      },
      {
        id: "original-fish-hot-pot",
        name: "Original Fish Hot Pot",
        description: "Simmering hot pot served with a side of rice.",
        price: "$17.58",
        image: placeholderImages.hotpot,
      },
      {
        id: "original-beef-hot-pot",
        name: "Original Beef Hot Pot",
        description: "Thinly sliced beef with noodles and mixed mushrooms in a savory hot pot broth.",
        price: "$18.85",
        image: placeholderImages.hotpot,
      },
      {
        id: "original-karaage-hot-pot",
        name: "Original Karaage Hot Pot",
        description: "Japanese-style fried chicken served in a hot pot broth with sliced vegetables.",
        price: "$17.85",
        image: placeholderImages.hotpot,
      },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwiches",
    items: [
      {
        id: "egg-salad-sandwich",
        name: "Egg Salad Sandwich",
        description: "Japanese-style egg salad with toast.",
        price: "$8.99",
      },
      {
        id: "katsu-sandwich",
        name: "Katsu Sandwich",
        description: "Katsu is a popular Japanese comfort food of breaded cutlets.",
        price: "$13.25",
        tags: ["popular"],
        image: placeholderImages.katsu,
        featured: true,
      },
    ],
  },
  {
    id: "spaghetti-napolitan",
    name: "Spaghetti Napolitan",
    items: [
      {
        id: "original-spaghetti",
        name: "Original Spaghetti",
        description: "A classic, comforting Japanese-style pasta tossed in a rich, savoury tomato-based sauce.",
        price: "$15.75",
      },
      {
        id: "katsu-spaghetti",
        name: "Katsu Spaghetti",
        description: "Our classic, comforting Japanese-style tomato pasta, topped with a perfectly golden, crispy piece of katsu.",
        price: "$20.85",
      },
      {
        id: "karaage-spaghetti",
        name: "Karaage Spaghetti",
        description: "Topped with crispy, juicy pieces of Japanese fried chicken (Karaage).",
        price: "$20.85",
        tags: ["popular"],
        featured: true,
      },
      {
        id: "grilled-chicken-spaghetti",
        name: "Grilled Chicken Spaghetti",
        description: "Our classic, comforting Japanese-style tomato pasta topped with juicy, tender cubes of grilled chicken.",
        price: "$20.85",
      },
      {
        id: "grilled-shrimp-spaghetti",
        name: "Grilled Shrimp Spaghetti",
        description: "Our classic, comforting Japanese-style tomato pasta topped with plump, succulent grilled shrimp.",
        price: "$20.85",
      },
    ],
  },
  {
    id: "ramen",
    name: "Ramen",
    items: [
      {
        id: "chicken-miso-ramen",
        name: "Chicken Miso Ramen",
        description: "Miso ramen with noodles in a savoury broth, topped with tender chicken pieces.",
        price: "$16.98",
        image: placeholderImages.heroRamen,
      },
      {
        id: "spicy-miso-katsu-ramen",
        name: "Spicy Miso Katsu Ramen",
        description: "Miso Katsu Ramen offers miso ramen topped with breaded chicken cutlet, egg, & veg.",
        price: "$17.58",
        tags: ["spicy"],
        image: placeholderImages.heroRamen,
      },
      {
        id: "katsu-miso-ramen",
        name: "Katsu Miso Ramen",
        description: "Ramen noodles in miso broth, topped with a breaded katsu cutlet.",
        price: "$17.58",
        image: placeholderImages.heroRamen,
      },
      {
        id: "tomato-beef-noodle",
        name: "Tomato Beef Noodle",
        description: "Ramen noodles in a savoury tomato broth topped with thinly sliced beef and onions.",
        price: "$17.58",
        image: placeholderImages.heroRamen,
      },
    ],
  },
  {
    id: "stirred-noodles",
    name: "Stirred Noodles",
    items: [
      {
        id: "spicy-beef-stirred-noodle",
        name: "Spicy Beef Stirred Noodle",
        description: "Noodles tossed with tender beef slices, chilies, and scallions in a savoury spicy sauce.",
        price: "$17.98",
        tags: ["spicy"],
        image: placeholderImages.stirFryNoodles,
      },
      {
        id: "grilled-chicken-stirred-noodle",
        name: "Grilled Chicken Stirred Noodle",
        description: "Grilled chicken over noodles with spinach and edamame, drizzled with sauce.",
        price: "$16.95",
        image: placeholderImages.stirFryNoodles,
      },
      {
        id: "veg-tofu-stirred-noodle",
        name: "VEG Tofu Stirred Noodle",
        description: "Stirred noodles with tofu cubes, edamame, and spinach, finished with sesame seeds.",
        price: "$13.95",
        tags: ["veg"],
        image: placeholderImages.stirFryNoodles,
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    items: [
      {
        id: "takoyaki",
        name: "Takoyaki",
        description: "A ball-shaped Japanese snack made of wheat flour-based batter cooked in a specially moulded pan.",
        price: "$8.15",
      },
      {
        id: "korokke",
        name: "Korokke",
        description: "Japanese croquettes made of potato, onion, and vegetables, coated in panko breadcrumbs and fried.",
        price: "$7.85",
      },
      {
        id: "karaage",
        name: "Karaage",
        description: "Japanese-style deep fried chicken nuggets.",
        price: "$12.60",
      },
      {
        id: "teriyaki-chicken-onigiri-1pc",
        name: "Teriyaki Chicken Onigiri /1pc",
        description: "Teriyaki Chicken Onigiri, sold individually.",
        price: "$5.55",
        tags: ["popular"],
      },
      {
        id: "tuna-mayo-onigiri-1pc",
        name: "Tuna Mayo Onigiri /1pc",
        description: "Tuna Mayo Onigiri, sold individually.",
        price: "$5.55",
      },
    ],
  },
  {
    id: "matcha-series",
    name: "Matcha Series",
    items: [
      {
        id: "matcha-cloud",
        name: "Matcha Cloud",
        description: "Served iced, 700 ml.",
        price: "$7.85",
      },
      {
        id: "matcha-pearls-latte",
        name: "Matcha Pearls Latte",
        description: "Served iced, 700 ml.",
        price: "$7.85",
      },
      {
        id: "mango-matcha-latte",
        name: "Mango Matcha Latte",
        description: "A tropical layered treat featuring mango fruit, milk, and earthy Matcha.",
        price: "$7.85",
      },
      {
        id: "strawberry-matcha-latte",
        name: "Strawberry Matcha Latte",
        description: "A vibrant three-layer drink with strawberries, milk, and a premium Matcha top.",
        price: "$7.85",
        tags: ["popular"],
      },
      {
        id: "taro-matcha-latte",
        name: "Taro Matcha Latte",
        description: "A beautiful layered blend of sweet, creamy taro, fresh milk, and premium Matcha.",
        price: "$7.85",
      },
      {
        id: "matcha-latte",
        name: "Matcha Latte",
        description: "Served iced, 700 ml.",
        price: "$7.00",
        tags: ["popular"],
      },
      {
        id: "matcha-smoothie",
        name: "Matcha Smoothie",
        description: "Served iced, 700 ml.",
        price: "$7.85",
      },
      {
        id: "biscoff-matcha-latte",
        name: "Biscoff Matcha Latte",
        description: "Served iced, 16 oz.",
        price: "$7.35",
      },
    ],
  },
  {
    id: "tea-latte",
    name: "Tea Latte",
    items: [
      {
        id: "black-tea-latte",
        name: "Black Tea Latte",
        description: "Served iced, 700 ml.",
        price: "$6.50",
        image: placeholderImages.bubbleTea,
      },
      {
        id: "brown-sugar-pearl-latte",
        name: "Brown Sugar Pearl Latte",
        description: "Served iced, 700 ml.",
        price: "$7.95",
        tags: ["popular"],
        image: placeholderImages.bubbleTea,
        featured: true,
      },
      {
        id: "jasmine-green-tea-latte",
        name: "Jasmine Green Tea Latte",
        description: "Served iced, 700 ml.",
        price: "$7.00",
        image: placeholderImages.bubbleTea,
      },
      {
        id: "taro-latte",
        name: "Taro Latte",
        description: "Served iced, 700 ml.",
        price: "$6.50",
        image: placeholderImages.bubbleTea,
      },
      {
        id: "signature-milk-tea",
        name: "Signature Milk Tea",
        description: "We use Ceylon Black Tea for our signature milk tea (no topping included).",
        price: "$6.50",
        image: placeholderImages.bubbleTea,
      },
    ],
  },
  {
    id: "fruit-tea",
    name: "Fruit Tea",
    items: [
      {
        id: "passionfruits-green-tea",
        name: "Passionfruits Green Tea",
        description: "Served iced, 700 ml.",
        price: "$7.80",
        image: placeholderImages.fruitTea,
      },
      {
        id: "lemon-honey-tea",
        name: "Lemon Honey Tea",
        description: "Served iced, 700 ml.",
        price: "$6.50",
        image: placeholderImages.fruitTea,
      },
      {
        id: "hibiscus-honey-tea",
        name: "Hibiscus Honey Tea",
        description: "Served iced, 700 ml.",
        price: "$6.90",
        image: placeholderImages.fruitTea,
      },
      {
        id: "grape-black-tea",
        name: "Grape Black Tea",
        description: "Served iced, 700 ml.",
        price: "$6.90",
        image: placeholderImages.fruitTea,
      },
      {
        id: "peach-honey-oolong-tea",
        name: "Peach Honey Oolong Tea",
        description: "Oolong tea with peach and honey, served over ice for a bright, fruity flavour.",
        price: "$7.95",
        tags: ["popular"],
        image: placeholderImages.fruitTea,
        featured: true,
      },
      {
        id: "mango-green-tea",
        name: "Mango Green Tea",
        description: "Green tea with mango for a bright, fruity flavour.",
        price: "$7.95",
        tags: ["popular"],
        image: placeholderImages.fruitTea,
      },
      {
        id: "strawberry-black-tea",
        name: "Strawberry Black Tea",
        description: "Black tea blended with strawberry for a fruity, refreshing drink.",
        price: "$7.95",
        image: placeholderImages.fruitTea,
      },
    ],
  },
  {
    id: "slush-smoothie",
    name: "Slush & Smoothie",
    items: [
      {
        id: "strawberry-slush",
        name: "Strawberry Slush",
        description: "Served iced, 700 ml.",
        price: "$7.50",
      },
      {
        id: "taro-smoothie",
        name: "Taro Smoothie",
        description: "Served iced, 700 ml.",
        price: "$7.50",
      },
      {
        id: "mango-smoothie",
        name: "Mango Smoothie",
        description: "Served iced, 700 ml.",
        price: "$7.85",
      },
      {
        id: "melon-smoothie",
        name: "Melon Smoothie",
        description: "Served iced, 700 ml.",
        price: "$7.85",
      },
      {
        id: "paradise-points",
        name: "Paradise Points",
        description: "Served iced, 700 ml.",
        price: "$8.35",
      },
      {
        id: "strawberry-mango-protein",
        name: "Strawberry Mango Protein",
        description: "Served iced, 700 ml.",
        price: "$8.98",
      },
      {
        id: "strawberry-smoothie",
        name: "Strawberry Smoothie",
        description: "Blended strawberry smoothie, 700 ml.",
        price: "$7.85",
      },
      {
        id: "grape-smoothie",
        name: "Grape Smoothie",
        description: "Blended grape smoothie, 700 ml.",
        price: "$7.85",
      },
      {
        id: "mango-slush",
        name: "Mango Slush",
        description: "Iced mango slush, 700 ml.",
        price: "$7.50",
      },
    ],
  },
  {
    id: "cheese-foam",
    name: "Cheese Foam",
    items: [
      {
        id: "tea-latte-cheese-foam",
        name: "Tea Latte Cheese Foam",
        description: "Served iced, 700 ml.",
        price: "$7.95",
      },
      {
        id: "jasmine-green-tea-cheese-foam",
        name: "Jasmine Green Tea Cheese Foam",
        description: "Served iced, 700 ml.",
        price: "$7.70",
      },
      {
        id: "strawberry-slush-cloud",
        name: "Strawberry Slush Cloud",
        description: "Served iced, 700 ml.",
        price: "$8.70",
      },
    ],
  },
  {
    id: "fresh-milk-series",
    name: "Fresh Milk Series",
    items: [
      {
        id: "mango-milk",
        name: "Mango Milk",
        description: "Mango and milk blended into a smooth, creamy drink.",
        price: "$7.25",
        tags: ["popular"],
      },
      {
        id: "strawberry-milk",
        name: "Strawberry Milk",
        description: "Strawberry blended with fresh milk.",
        price: "$7.25",
      },
      {
        id: "mango-passion-milk",
        name: "Mango Passion Milk",
        description: "Tropical blend of mango and passion fruit mixed with creamy milk.",
        price: "$7.25",
      },
    ],
  },
  {
    id: "signature-coffee",
    name: "Signature Coffee (Iced Only)",
    items: [
      {
        id: "biscoff-latte",
        name: "Biscoff Latte",
        description: "Served iced, 16 oz.",
        price: "$7.35",
      },
      {
        id: "einspenner",
        name: "Einspenner",
        description: "Served iced, 16 oz.",
        price: "$5.10",
      },
    ],
  },
  {
    id: "pastry",
    name: "Pastry",
    items: [
      {
        id: "chocolate-chunk-cookie",
        name: "Chocolate Chunk Cookie",
        description: "Classic cookie packed with chocolate chunks throughout.",
        price: "$3.60",
      },
      {
        id: "peanut-butter-chocolate-cookie",
        name: "Peanut Butter Chocolate Cookie",
        description: "Peanut butter cookie half-dipped in chocolate and topped with crushed peanuts.",
        price: "$3.60",
      },
      {
        id: "blueberry-lemon-muffin",
        name: "Blueberry Lemon Muffin",
        description: "Muffin loaded with blueberries and a zesty lemon kick.",
        price: "$3.75",
      },
      {
        id: "cinnamon-coffee-muffin",
        name: "Cinnamon Coffee Muffin",
        description: "Coffee‑flavoured muffin topped with a cinnamon powder dusting for a warm, spiced finish.",
        price: "$3.75",
      },
      {
        id: "banana-loaf",
        name: "Banana Loaf",
        description: "Thick slice of classic banana loaf with banana-forward flavour.",
        price: "$3.75",
      },
      {
        id: "iced-lemon-loaf",
        name: "Iced Lemon Loaf",
        description: "Lemon loaf cake with a tangy icing glaze.",
        price: "$3.75",
        tags: ["popular"],
        featured: true,
      },
    ],
  },
  {
    id: "soft-drink",
    name: "Soft Drinks",
    items: [
      {
        id: "coke-zero",
        name: "Coke Zero",
        description: "Zero-sugar Coca-Cola.",
        price: "$3.20",
      },
      {
        id: "coke",
        name: "Coke",
        description: "Classic Coca-Cola.",
        price: "$3.20",
      },
    ],
  },
];

export const featuredItems: MenuItem[] = menu
  .flatMap((category) => category.items)
  .filter((item) => item.featured);
