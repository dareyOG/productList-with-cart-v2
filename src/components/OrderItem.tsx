import { CartItem } from "../dataTypes";

export default function OrderItem({ orderItem }: { orderItem: CartItem }) {
  return (
    <li
      key={orderItem.name}
      className="grid grid-cols-[auto_1fr_auto] gap-x-[1rem] py-[.5rem] text-[1.5rem] md:text-[1.1rem]"
    >
      <div className="aspect-square w-[4.5rem] md:w-[3.5rem]">
        <img
          src={orderItem.image.thumbnail}
          alt={`${orderItem.name} thumnail`}
          className="w-full rounded-lg"
        />
      </div>
      <div className="flex w-[10rem] flex-col justify-between gap-y-1">
        <p className="truncate font-semibold">{orderItem.name}</p>
        <div className="space-x-[0.5rem]">
          <span className="font-semibold text-red">
            {orderItem.quantity}&times;
          </span>
          <span className="font-light text-rose-300">
            @ {orderItem.unitprice}
          </span>
        </div>
      </div>
      <div className="flex place-items-center font-semibold">
        {orderItem.totalPrice}
      </div>
    </li>
  );
}
