// import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

function Cart() {
  return (
    <section className="h-fit rounded-[1rem] border border-transparent bg-[#fff] p-[2rem] font-bold">
      <h2 className="mb-5 text-[2rem] capitalize text-red">Your Cart (10)</h2>
      <>
        {/* <EmptyCart /> */}
        <FilledCart />
      </>
    </section>
  );
}

export default Cart;
