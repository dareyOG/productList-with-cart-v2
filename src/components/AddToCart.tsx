export default function AddToCart() {
  return (
    <button className="relative left-[50%] top-[-2.5rem] z-10 flex translate-x-[-50%] items-center gap-5 rounded-full border-2 border-rose-300 bg-rose-50 px-10 py-4 hover:border-red hover:text-red">
      <img src="assets/images/icon-add-to-cart.svg" alt="add to cart" />
      Add to Cart
    </button>
  );
}
