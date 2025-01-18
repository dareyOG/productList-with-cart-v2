export default function FilledCart() {
  return (
    <>
      <ul className="divide-y-[.08rem] divide-rose-100 border-b border-rose-100">
        <li className="flex items-center justify-between gap-5 py-[0.5rem]">
          <div className="text-[1.5rem] font-semibold">
            <h3 className="text-rose-900">Classic Tiramisu</h3>
            <div className="space-x-5 text-[2.5rem] text-rose-400">
              <span className="text-red">1&times;</span>
              <span className="font-normal">@ $5.50</span>
              <span>$5.50</span>
            </div>
          </div>
          <div className="">
            <button>
              <img
                src="/images/icon-remove-item.svg"
                alt="remove item"
                className="rounded-full border-2 border-rose-300 p-[.15rem]"
              />
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between gap-5 py-[0.5rem]">
          <div className="text-[1.5rem] font-semibold">
            <h3 className="text-rose-900">Pistachio Baklava</h3>
            <div className="space-x-5 text-[2.5rem] text-rose-400">
              <span className="text-red">4&times;</span>
              <span className="font-normal">@ $5.50</span>
              <span>$5.50</span>
            </div>
          </div>
          <div className="">
            <button>
              <img
                src="/images/icon-remove-item.svg"
                alt="remove item"
                className="rounded-full border-2 border-rose-300 p-[.15rem]"
              />
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between gap-5 py-[0.5rem]">
          <div className="text-[1.5rem] font-semibold">
            <h3 className="text-rose-900">Vanilla Bean Crème Brûlée</h3>
            <div className="space-x-5 text-[2.5rem] text-rose-400">
              <span className="text-red">5&times;</span>
              <span className="font-normal">@ $5.50</span>
              <span>$5.50</span>
            </div>
          </div>
          <div className="">
            <button>
              <img
                src="/images/icon-remove-item.svg"
                alt="remove item"
                className="rounded-full border-2 border-rose-300 p-[.15rem]"
              />
            </button>
          </div>
        </li>
      </ul>
      <div className="flex items-center justify-between py-10">
        <p className="text-[1.2rem] font-semibold capitalize text-rose-500">
          order total
        </p>
        <p className="text-[3rem] text-rose-900">$50.00</p>
      </div>
      <div className="mb-10 flex w-full items-center justify-center gap-2 rounded-[0.5rem] bg-rose-100 px-6 py-5 font-medium">
        <img src="/images/icon-carbon-neutral.svg" alt="carbon neutral" />
        <p className="text-[1.2rem]">
          This is a{" "}
          <span className="text-[1.2rem] font-bold text-rose-900">
            carbon-neutral
          </span>{" "}
          delivery
        </p>
      </div>
      <button className="mx-auto w-full rounded-full bg-red px-6 py-5 text-[1.5rem] font-semibold capitalize text-rose-50 hover:bg-rose-900 hover:opacity-95">
        confirm order
      </button>
    </>
  );
}
// flex items-center bg-rose-300 text-[1.5rem] text-rose-50 px-6 mx-auto py-3 w-full rounded-full hover:bg-rose-900 hover:opacity-95

{
  /* <img src="/images/icon-carbon-neutral.svg" alt="carbon neutral" />
          <p className="text-[1.5rem]">
            This is a <span className="">carbon-neutral</span> delivery
          </p> */
}
