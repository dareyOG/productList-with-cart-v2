import { Action } from "../dataTypes";
import { useDessert } from "./context/DessertContext";

export default function Button({ action, textContent }:{action:Action, textContent:string}) {
  const { dispatch } = useDessert();

  if (action.type === "add dessert" && textContent === "Add to Cart"){
    const 
  }
    const handleClick = () => {
      dispatch();
    };
  return <button onClick={handleClick} className=""></button>;
}

{
  /* <button className="mx-auto w-full rounded-full bg-red px-6 py-5 text-[1.2rem] font-semibold capitalize text-rose-50 hover:bg-rose-900 hover:opacity-95">
          confirm order
        </button> */
}

/* mx-auto w-full rounded-full bg-red px-6 py-5 text-[1.2rem] font-semibold capitalize text-rose-50 hover:bg-rose-900 hover:opacity-95 */
