import { Ionicons } from "@expo/vector-icons";

// type IconType = React.ComponentProps<typeof Ionicons>['name'];
export type IconName = keyof typeof Ionicons.glyphMap;

export type CategoryType = {
  id: string;
  name: string;
  icon: IconName;
};

export const CATEGORIES: CategoryType[] = [
  { id: "Salary", name: "Salary", icon: "cash-outline" },
  { id: "Groceries", name: "Groceries", icon: "cart-outline" },
  { id: "Entertainment", name: "Entertainment", icon: "film-outline" },
  { id: "Clothing", name: "Clothing", icon: "shirt-outline" },
  { id: "Health", name: "Health", icon: "medkit-outline" },
  { id: "Travel", name: "Travel", icon: "bus-outline" },
  { id: "Food", name: "Food", icon: "fast-food-outline" },
];

export type CategoryKey =
  | "Salary"
  | "Groceries"
  | "Entertainment"
  | "Clothing"
  | "Health"
  | "Travel"
  | "Food";

// export type CategoryKey = keyof typeof CATEGORIES_ICONS;

export const CATEGORIES_ICONS: Record<CategoryKey, IconName> = {
  Salary: "cash-outline",
  Groceries: "cart-outline",
  Entertainment: "film-outline",
  Clothing: "shirt-outline",
  Health: "medkit-outline",
  Travel: "bus-outline",
  Food: "fast-food-outline",
};
