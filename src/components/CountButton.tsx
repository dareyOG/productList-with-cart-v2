export default function CountButton() {
  return (
    <div className="relative top-[-2.5rem] mx-auto flex w-[36%] items-center justify-center gap-16 rounded-full bg-red px-10 py-4 text-rose-50">
      <button className="rounded-full border-2 border-rose-100 px-2.5 hover:border-transparent hover:bg-rose-50">
        &#45;
      </button>
      <span>10</span>
      <button className="rounded-full border-2 border-rose-100 px-2 hover:border-transparent hover:bg-rose-50">
        &#43;
      </button>
    </div>
  );
}
