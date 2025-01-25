import { useDessert } from "./context/DessertContext";

export default function CartTotal() {
  const { cartlist } = useDessert();

  const totalPrice = cartlist
    .map((cartItem) => cartItem.totalPrice)
    .reduce((acc, currPrice) => acc + currPrice, 0);

  return (
    <div className="flex items-center justify-between py-10">
      <p className="text-[1.3rem] font-medium capitalize text-rose-500">
        order total
      </p>
      <p className="text-[2rem] font-bold text-rose-900">{totalPrice}</p>
    </div>
  );
}
