export type FrozenFlavor = {
  id: string;
  name: string;
  fruit: string;
  chocolate: string;
  accentColor: string;
  image: string;
  market: "US" | "EU" | "BOTH";
};

export type Beverage = {
  id: string;
  name: string;
  descriptor: string;
  image: string;
  accentColor: string;
};

export const frozenFlavors: FrozenFlavor[] = [
  {
    id: "strawberry",
    name: "Strawberries",
    fruit: "Whole frozen strawberry",
    chocolate: "White & Milk Chocolate",
    accentColor: "#CC2222",
    image: "/products/tub-strawberry.webp",
    market: "US",
  },
  {
    id: "rasp-milk",
    name: "Raspberries",
    fruit: "Whole frozen raspberry",
    chocolate: "White & Milk Chocolate",
    accentColor: "#E2375C",
    image: "/products/tub-rasp-milk.webp",
    market: "US",
  },
  {
    id: "rasp-dark",
    name: "Raspberries Dark",
    fruit: "Whole frozen raspberry",
    chocolate: "White & 70% Dark Chocolate",
    accentColor: "#8B2252",
    image: "/products/tub-rasp-dark.webp",
    market: "US",
  },
  {
    id: "blue",
    name: "Blueberries",
    fruit: "Whole frozen blueberry",
    chocolate: "White & Milk Chocolate",
    accentColor: "#5B4FA0",
    image: "/products/tub-blue.webp",
    market: "US",
  },
  {
    id: "banana",
    name: "Bananas",
    fruit: "Whole frozen banana slice",
    chocolate: "White & 70% Dark Chocolate",
    accentColor: "#A07840",
    image: "/products/tub-banana.webp",
    market: "US",
  },
];

export const beverages: Beverage[] = [
  {
    id: "mango",
    name: "Mango",
    descriptor: "Juicy, smooth, and tropical — with a naturally sweet, rounded finish.",
    image: "/products/bev-mango.webp",
    accentColor: "#F5A623",
  },
  {
    id: "cacao",
    name: "Original Cacao Fruit",
    descriptor: "Delicate, floral, and naturally exotic — the pure taste of the cacao superfruit.",
    image: "/products/bev-cacao.webp",
    accentColor: "#5C7A28",
  },
  {
    id: "passion",
    name: "Passion Fruit",
    descriptor: "Bright, tangy, and refreshing — with a lively tropical kick.",
    image: "/products/bev-passion.webp",
    accentColor: "#7C3FA0",
  },
];
