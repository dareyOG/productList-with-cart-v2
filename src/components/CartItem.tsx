import Button from "./Button";
import { CartItem as CartItemProps } from "../dataTypes";
import { formatCurrency } from "../utils/help";

export default function CartItem({ cartItem }: { cartItem: CartItemProps }) {
  return (
    <li className="flex items-center justify-between gap-5 py-[1rem]">
      <div className="space-y-3 text-[1.5rem] font-semibold">
        <h3 className="text-rose-900">{cartItem.name}</h3>
        <div className="space-x-10 text-[1.4rem] text-rose-400">
          <span className="font-bold text-red">{cartItem.quantity}&times;</span>
          <span className="space-x-1 font-normal">
            <span>@</span>
            <span className="font-medium">
              {formatCurrency(cartItem.unitPrice)}
            </span>
          </span>
          <span className="font-semibold">
            {formatCurrency(cartItem.totalPrice)}
          </span>
        </div>
      </div>
      <Button action={{ type: "remove dessert", payload: cartItem }}>
        <img src="assets/images/icon-remove-item.svg" alt="remove dessert" />
      </Button>
    </li>
  );
}
