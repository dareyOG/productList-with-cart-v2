import React, { createContext, useContext, useEffect, useReducer } from "react";
import { Action, ContextType, State } from "../../dataTypes";

const DessertContext = createContext<ContextType | null>(null);

const initialState: State = {
  desserts: [],
  cartlist: [],
  isModalActive: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "load desserts":
      return { ...state, desserts: action.payload };

    case "add dessert":
      return { ...state, cartlist: [...state.cartlist, action.payload] };

    case "remove dessert":
      return {
        ...state,
        cartlist: [...state.cartlist].filter(
          (cartitem) => cartitem.name !== action.payload.name,
        ),
      };

    case "increase quantity":
      return {
        ...state,
        cartlist: [...state.cartlist].slice().map((cartItem) =>
          cartItem.name === action.payload
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                totalPrice: cartItem.unitPrice * (cartItem.quantity + 1),
              }
            : { ...cartItem },
        ),
      };

    case "decrease quantity":
      return {
        ...state,
        cartlist: [...state.cartlist]
          .slice()
          .map((cartItem) =>
            cartItem.name === action.payload
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 0,
                  totalPrice: cartItem.unitPrice * (cartItem.quantity - 1),
                }
              : { ...cartItem },
          )
          .filter((cartItem) => cartItem.quantity > 0),
      };

    case "confirm order":
      return { ...state, isModalActive: !state.isModalActive };

    case "start new order":
      return { ...state, cartlist: [], isModalActive: !state.isModalActive };

    default:
      throw new Error("unknown action");
  }
}

export function DessertContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [{ desserts, cartlist, isModalActive }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    const loadDesserts = async () => {
      const dessertRes = await fetch("/data/data.json");
      const dessertData = await dessertRes.json();
      const { desserts } = dessertData;

      dispatch({ type: "load desserts", payload: desserts });
    };
    loadDesserts();
  }, []);

  return (
    <DessertContext.Provider
      value={{ desserts, cartlist, isModalActive, dispatch }}
    >
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
