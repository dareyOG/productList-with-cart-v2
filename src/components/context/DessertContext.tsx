import React, { createContext, useContext, useReducer } from "react";
import { Action, State } from "../../dataTypes";

const DessertContext = createContext<State | null>(null);

const initialState: State = {
  desserts: [],
  cartlist: [],
  isModalActive: false,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "load desserts":
      return { ...state, desserts: action.payload };

    case "add dessert":
      return { ...state, cartlist: [...state.cartlist, action.payload] };

    case "remove dessert":
      return {
        ...state,
        cartlist: [...state.cartlist].filter(
          (cartitem) => cartitem.name !== action.payload,
        ),
      };

    case "increase quantity":
      return {
        ...state,
        cartlist: state.cartlist
          .slice()
          .map(
            (cartItem: {
              name: string;
              quantity: number;
              unitprice: number;
            }) =>
              cartItem.name === action.payload
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                    totalPrice: cartItem.unitprice * (cartItem.quantity + 1),
                  }
                : { ...cartItem },
          ),
      };

    case "decrease quantity":
      return {
        ...state,
        cartlist: state.cartlist
          .slice()
          .map(
            (cartItem: {
              name: string;
              quantity: number;
              unitprice: number;
            }) =>
              cartItem.name === action.payload
                ? cartItem.quantity > 1
                  ? {
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                      totalprice: cartItem.unitprice * (cartItem.quantity - 1),
                    }
                  : null
                : cartItem,
          )
          .filter((cartItem) => cartItem !== null),
      };

    case "confirm order":
      return { ...state, isModalActive: !state.isModalActive };

    case "start new order":
      return { ...state, cartlist: [] };

    default:
      throw new Error("unknown action");
  }
}

export function DessertContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DessertContext.Provider value={{ state, dispatch }}>
      {children}
    </DessertContext.Provider>
  );
}

export function useDessert() {
  const context = useContext(DessertContext);
  if (!context)
    throw new Error("Context is placed outside of the useDessert scope");
  return context;
}
