export type State = {
  desserts: Dessert[];
  cartlist: CartItem[];
  isModalActive: boolean;
};

export type Action =
  | {
      type: "load desserts";
      payload: Dessert[];
    }
  | {
      type: "add dessert";
      payload: CartItem;
    }
  | {
      type: "remove dessert";
      payload: CartItem;
    }
  | { type: "decrease quantity"; payload: string }
  | { type: "increase quantity"; payload: string }
  | { type: "confirm order" }
  | { type: "start new order" };

export type ContextType = {
  desserts: Dessert[];
  cartlist: CartItem[];
  isModalActive: boolean;
  dispatch: React.Dispatch<Action>;
};

export type DessertProps = {
  children: React.ReactNode;
};

type Dessert = {
  name: string;
  category: string;
  price: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

type CartItem = {
  name: string;
  image: { thumbnail: string };
  quantity: number;
  unitprice: number;
  totalPrice: number;
};

export type DessertItemProps = {
  dessert: Dessert;
};
