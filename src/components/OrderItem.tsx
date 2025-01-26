import { CartItem } from "../dataTypes";
import { formatCurrency } from "../utils/help";

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
      <div className="flex w-[16.5rem] flex-col justify-between gap-y-1">
        <p className="truncate font-semibold">{orderItem.name}</p>
        <div className="space-x-10">
          <span className="font-semibold text-red">
            {orderItem.quantity}&times;
          </span>
          <span className="space-x-1 font-semibold text-rose-300">
            <span>@</span>
            <span> {formatCurrency(orderItem.unitPrice)}</span>
          </span>
        </div>
      </div>
      <div className="flex place-items-center font-semibold">
        {formatCurrency(orderItem.totalPrice)}
      </div>
    </li>
  );
}
