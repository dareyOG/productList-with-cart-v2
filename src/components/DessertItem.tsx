import { DessertItemProps } from "../dataTypes";

export default function DessertItem({ dessert }: DessertItemProps) {
  return (
    <li>
      <picture>
        <source media="(min-width:768px)" srcSet={dessert.image.tablet} />
        <source media="(min-width:1024px)" srcSet={dessert.image.desktop} />
        <img
          src={dessert.image.mobile}
          alt="dessert"
          className="h-[20rem] w-full rounded-[1.2rem] border-2 border-transparent object-cover md:h-[25rem]"
        />
      </picture>
      <div className="text-[1.3rem] font-semibold">
        <button className="relative left-[50%] top-[-2.5rem] flex translate-x-[-50%] gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red hover:text-red">
          <img src="/images/icon-add-to-cart.svg" alt="add to cart" />
          Add to Cart
        </button>
        <div className="text-[1.5rem]">
          <p className="font-light text-rose-400">{dessert.category}</p>
          <p>{dessert.name}</p>
          <p className="text-red">{dessert.price}</p>
        </div>
      </div>
    </li>
  );
}
