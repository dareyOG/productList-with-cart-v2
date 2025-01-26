import React from "react";
import { Action } from "../dataTypes";
import { useDessert } from "./context/DessertContext";

export default function Button({
  children,
  action,
}: {
  children: string | React.ReactNode;
  action: Action;
}) {
  const { dispatch } = useDessert();

  const handleClick = () => {
    dispatch(action);
  };

  if (action.type === "add dessert") {
    return (
      <button
        className="relative left-[50%] top-[-2.5rem] z-10 flex translate-x-[-50%] items-center gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red hover:text-red"
        onClick={handleClick}
      >
        <img src="assets/images/icon-add-to-cart.svg" alt="add to cart" />
        Add to Cart
      </button>
    );
  }

  if (action.type === "remove dessert") {
    return (
      <button
        className="rounded-full border-2 border-rose-300 p-[0.2rem] hover:border-rose-500"
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }

  if (action.type === "decrease quantity") {
    return (
      <button className="countBtn px-2.5" onClick={handleClick}>
        {children}
      </button>
    );
  }

  if (action.type === "increase quantity") {
    return (
      <button className="countBtn px-2" onClick={handleClick}>
        {children}
      </button>
    );
  }

  if (action.type === "confirm order") {
    return (
      <button className="btn text-[1.2rem]" onClick={handleClick}>
        {children}
      </button>
    );
  }

  if (action.type === "start new order") {
    return (
      <button className="btn text-[1.5rem]" onClick={handleClick}>
        {children}
      </button>
    );
  }
  return null;
}
