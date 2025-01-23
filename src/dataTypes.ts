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

export type State = {
  desserts: Dessert[];
  cartlist: CartItem[];
  isModalActive: boolean;
};

export type Action =
  | {
      type: "load desserts";
      payload: {}[];
    }
  | {
      type: "add dessert";
      payload: {};
    }
  | {
      type: "remove dessert";
      payload: {};
    }
  | { type: "decrease quantity"; payload: string }
  | { type: "increase quantity"; payload: string }
  | { type: "confirm order" }
  | { type: "start new order" };
