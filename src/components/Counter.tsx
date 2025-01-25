export default function CountButton() {
  return (
    <div className="relative top-[-2.5rem] mx-auto flex w-[54%] items-center justify-center gap-16 rounded-full bg-red px-10 py-4 text-rose-50">
      <button className="countBtn px-2.5">&#45;</button>
      <span>10</span>
      <button className="countBtn px-2">&#43;</button>
    </div>
  );
}
