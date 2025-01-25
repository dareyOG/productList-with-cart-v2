import { useDessert } from "./context/DessertContext";
import OrderItem from "./OrderItem";

export default function OrderModal() {
  const { cartlist, dispatch } = useDessert();

  const orderList = cartlist.slice();

  return (
    <>
      <div className="fixed inset-0 bg-rose-900 opacity-70 brightness-0"></div>
      <section className="left- fixed top-[10rem] z-20 w-full rounded-[2rem] border border-transparent bg-rose-50 p-12 backdrop-brightness-0 md:left-[50%] md:top-[7rem] md:max-h-[50rem] md:w-[50rem] md:translate-x-[-50%]">
        <img src="/images/icon-order-confirmed.svg" alt="confirmed order" />
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

          <div className="flex items-center justify-between bg-rose-50 pt-[1.25rem]">
            <p className="text-[1.5rem] font-medium capitalize text-rose-500 md:text-[1.3rem]">
              order total
            </p>
            <p className="text-[1.5rem] font-bold text-rose-900 md:text-[2rem]">
              $50.00
            </p>
          </div>
        </ul>
        <button className="mx-auto mt-[2rem] w-full rounded-full bg-red px-6 py-5 text-[1.5rem] font-semibold capitalize text-rose-50 hover:bg-rose-900 hover:opacity-95">
          start new order
        </button>
      </section>
      ;
    </>
  );
}

{
  /* <li className="grid grid-cols-[auto_1fr_auto] gap-x-[1rem] py-[.5rem] text-[1.5rem] md:text-[1.1rem]">
<div className="aspect-square w-[4.5rem] md:w-[3.5rem]">
  <img
    src="/images/image-creme-brulee-thumbnail.jpg"
    alt="thumbnail"
    className="w-full rounded-lg"
  />
</div>
<div className="flex w-[10rem] flex-col justify-between gap-y-1">
  <p className="truncate font-semibold">Creme Brulee</p>
  <div className="space-x-[0.5rem]">
    <span className="font-semibold text-red">1&times;</span>
    <span className="font-light text-rose-300">@ $5.50</span>
  </div>
</div>
<div className="flex place-items-center font-semibold">$5.50</div>
</li>
<li className="grid grid-cols-[auto_1fr_auto] gap-x-[1rem] py-[.5rem] text-[1.5rem] md:text-[1.1rem]">
<div className="aspect-square w-[4.5rem] md:w-[3.5rem]">
  <img
    src="/images/image-creme-brulee-thumbnail.jpg"
    alt="thumbnail"
    className="w-full rounded-lg"
  />
</div>
<div className="flex w-[10rem] flex-col justify-between gap-y-1">
  <p className="truncate font-semibold">Creme Brulee</p>
  <div className="space-x-[0.5rem]">
    <span className="font-semibold text-red">1&times;</span>
    <span className="font-light text-rose-300">@ $5.50</span>
  </div>
</div>
<div className="flex place-items-center font-semibold">$5.50</div>
</li>
<li className="grid grid-cols-[auto_1fr_auto] gap-x-[1rem] py-[.5rem] text-[1.5rem] md:text-[1.1rem]">
<div className="aspect-square w-[4.5rem] md:w-[3.5rem]">
  <img
    src="/images/image-creme-brulee-thumbnail.jpg"
    alt="thumbnail"
    className="w-full rounded-lg"
  />
</div>
<div className="flex w-[10rem] flex-col justify-between gap-y-1">
  <p className="truncate font-semibold">Creme Brulee</p>
  <div className="space-x-[0.5rem]">
    <span className="font-semibold text-red">1&times;</span>
    <span className="font-light text-rose-300">@ $5.50</span>
  </div>
</div>
<div className="flex place-items-center font-semibold">$5.50</div>
</li>
<li className="grid grid-cols-[auto_1fr_auto] gap-x-[1rem] py-[.5rem] text-[1.5rem] md:text-[1.1rem]">
<div className="aspect-square w-[4.5rem] md:w-[3.5rem]">
  <img
    src="/images/image-creme-brulee-thumbnail.jpg"
    alt="thumbnail"
    className="w-full rounded-lg"
  />
</div>
<div className="flex w-[10rem] flex-col justify-between gap-y-1">
  <p className="truncate font-semibold">Creme Brulee</p>
  <div className="space-x-[0.5rem]">
    <span className="font-semibold text-red">1&times;</span>
    <span className="font-light text-rose-300">@ $5.50</span>
  </div>
</div>
<div className="flex place-items-center font-semibold">$5.50</div>
</li> */
}
