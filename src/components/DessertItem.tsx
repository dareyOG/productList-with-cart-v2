import { Dessert } from "../dataTypes";
import Button from "./Button";
import Counter from "./Counter";
import { useDessert } from "./context/DessertContext";

export default function DessertItem({ dessert }: { dessert: Dessert }) {
  const { desserts, cartlist } = useDessert();

  const isAddedToCartlist = cartlist
    .map((cartItem) => cartItem.name)
    .includes(dessert.name);

  const cartItem = {
    name: dessert.name,
    quantity: 1,
    unitPrice: dessert.price,
    image: { thumbnail: dessert.image.thumbnail },
    totalPrice: dessert.price * 1,
  };

  return (
    <li>
      <picture>
        <source media="(min-width:768px)" srcSet={dessert.image.tablet} />
        <source media="(min-width:1024px)" srcSet={dessert.image.desktop} />
        <img
          src={dessert.image.mobile}
          alt={dessert.name}
          className="h-[20rem] w-full rounded-[1.2rem] border-2 border-transparent object-cover md:h-[25rem]"
        />
      </picture>

      <div className="text-[1.2rem] font-semibold">
        {!isAddedToCartlist ? (
          <Button action={{ type: "add dessert", payload: cartItem }}>
            add to cart
          </Button>
        ) : (
          <Counter dessert={dessert} />
        )}
        <div className="text-[1.5rem] text-rose-900">
          <p className="font-light text-rose-400">{dessert.category}</p>
          <p>{dessert.name}</p>
          <p className="text-red">{dessert.price}</p>
        </div>
      </div>
    </li>
  );
}
