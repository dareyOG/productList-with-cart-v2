import { ReactNode } from "react";

type Dessert = {
  name: string;
  category: string;
  unitPrice: number;
  images: {};
};

export type State = {
  desserts: Dessert[];
  cartlist: {
    id: string;
    name: string;
    quantity: number;
    unitprice: number;
    totalPrice: number;
  }[];
  isModalActive: boolean;
};

export type Action =
  | {
      type: "load desserts";
      payload: {}[];
    }
  | {
      type: "add dessert" | "remove dessert";
      payload: {};
    }
  | { type: "increase quantity" | "decrease quantity"; payload: string }
  | { type: "confirm order" | "start new order" };

export type DessertContext = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export type ContextProvider = {
  children: ReactNode;
};
