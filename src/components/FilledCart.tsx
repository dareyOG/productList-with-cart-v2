import Button from "./Button";
import CartFooter from "./CartFooter";
import CartItem from "./CartItem";
import Total from "./Total";
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
        <Total />
        <CartFooter />
        <Button action={{ type: "confirm order" }}>confirm order</Button>
      </>
    </>
  );
}
