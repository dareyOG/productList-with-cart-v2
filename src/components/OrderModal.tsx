import Button from "./Button";
import OrderItem from "./OrderItem";
import Total from "./Total";
import { useDessert } from "./context/DessertContext";

export default function OrderModal() {
  const { cartlist } = useDessert();

  const orderList = cartlist.slice();

  return (
    <>
      <div className="fixed inset-0 z-20 bg-rose-900 opacity-70 brightness-0"></div>
      <section className="fixed left-0 top-[10rem] z-20 w-full rounded-[2rem] border border-transparent bg-rose-50 p-12 backdrop-brightness-0 md:left-[50%] md:top-[7rem] md:max-h-[50rem] md:w-[50rem] md:translate-x-[-50%] md:translate-y-[50%] lg:translate-y-[15%]">
        <img
          src="assets/images/icon-order-confirmed.svg"
          alt="confirmed order"
        />
        <div className="w-fit py-[2rem]">
          <h1 className="text-[4rem] font-bold capitalize md:text-[3rem]">
            order <br className="lg:hidden" /> confirmed
          </h1>
          <p className="text-[1.6rem] text-rose-400 md:text-[1.21rem]">
            We hope you enjoy your food!
          </p>
        </div>
        <ul className="rounded-[1rem] border-b-rose-100 bg-rose-50 p-[1.25rem]">
          <div className="max-h-[15rem] divide-y-2 divide-rose-100 overflow-y-auto">
            {orderList.map((orderItem) => (
              <OrderItem orderItem={orderItem} key={orderItem.name} />
            ))}
          </div>
          <Total />
        </ul>
        <Button action={{ type: "start new order" }}>start new order</Button>
      </section>
      ;
    </>
  );
}
