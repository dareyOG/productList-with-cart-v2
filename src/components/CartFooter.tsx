export default function CartFooter() {
  return (
    <div className="mb-10 flex w-full items-center justify-center gap-2 rounded-[0.5rem] bg-rose-100 px-6 py-5 font-medium">
      <img src="assets/images/icon-carbon-neutral.svg" alt="carbon neutral" />
      <p className="text-[1.2rem]">
        This is a{" "}
        <span className="text-[1rem] font-bold text-rose-900">
          carbon-neutral
        </span>{" "}
        delivery
      </p>
    </div>
  );
}
