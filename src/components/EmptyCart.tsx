export default function EmptyCart() {
  return (
    <div className="mb-10">
      <img
        src="/images/illustration-empty-cart.svg"
        alt="empty cart"
        className="mx-auto w-[10rem]"
      />
      <div className="text-center text-[1.2rem] text-rose-500">
        Your added items will appear here
      </div>
    </div>
  );
}
