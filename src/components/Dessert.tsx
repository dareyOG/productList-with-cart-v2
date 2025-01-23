import { DessertProps } from "../dataTypes";

function Dessert({ children }: DessertProps) {
  return (
    <main className="grid gap-20 bg-rose-100/50 p-[3rem] lg:grid-flow-col lg:grid-cols-[7fr,3fr]">
      {children}
    </main>
  );
}

export default Dessert;
