import Button from "./Button";
import { Dessert } from "../dataTypes";
import { useDessert } from "./context/DessertContext";

export default function CountButton({ dessert }: { dessert: Dessert }) {
  const { cartlist } = useDessert();

  const quantity = cartlist.find(
    (cartItem) => cartItem.name === dessert.name,
  )?.quantity;

  return (
    <div className="relative top-[-2.5rem] mx-auto flex w-[54%] items-center justify-center gap-10 rounded-full bg-red px-10 py-4 text-rose-50 sm:gap-x-[3rem]">
      <Button action={{ type: "decrease quantity", payload: dessert.name }}>
        &#45;
      </Button>
      <span className="mx-auto">{quantity}</span>
      <Button action={{ type: "increase quantity", payload: dessert.name }}>
        &#43;
      </Button>
    </div>
  );
}
