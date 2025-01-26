import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import { useDessert } from "./context/DessertContext";

function Cart() {
  const { cartlist } = useDessert();

  const cartQuantity = cartlist
    .map((cartItem) => cartItem.quantity)
    .reduce((acc, currQuantity) => acc + currQuantity, 0);

  return (
    <section className="h-fit rounded-[1rem] border border-transparent bg-rose-50 p-[2rem] font-bold">
      <h2 className="mb-5 text-[2rem] capitalize text-red">
        Your Cart ({cartQuantity})
      </h2>
      <>{cartlist.length ? <FilledCart /> : <EmptyCart />}</>
    </section>
  );
}

export default Cart;
