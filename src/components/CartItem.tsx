import { CartItem as CartItemProps } from "../dataTypes";

export default function CartItem({ cartItem }: { cartItem: CartItemProps }) {
  return (
    <li className="flex items-center justify-between gap-5 py-[1rem]">
      <div className="space-y-3 text-[1.2rem] font-semibold">
        <h3 className="text-rose-900">{cartItem.name}</h3>
        <div className="space-x-5 text-rose-400">
          <span className="text-red">{cartItem.quantity}&times;</span>
          <span className="font-normal">@{cartItem.unitprice}</span>
          <span>{cartItem.totalPrice}</span>
        </div>
      </div>
      <div className="">
        <button>
          <img
            src="/assets/images/icon-remove-item.svg"
            alt="remove item"
            className="rounded-full border-2 border-rose-300 p-[.15rem]"
          />
        </button>
      </div>
    </li>
  );
}
