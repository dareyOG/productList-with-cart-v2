// import Button from "./Button";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { useDessert } from "./context/DessertContext";

export default function FilledCart() {
  const { cartlist } = useDessert();
  return (
    <>
      <ul className="divide-y-[.08rem] divide-rose-100 border-b border-rose-100">
        {cartlist.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.name} />
        ))}
      </ul>
      <>
        <CartTotal />
        <CartFooter />
        <button className="mx-auto w-full rounded-full bg-red px-6 py-5 text-[1.2rem] font-semibold capitalize text-rose-50 hover:bg-rose-900 hover:opacity-95">
          confirm order
        </button>
      </>
    </>
  );
}
