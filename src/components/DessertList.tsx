import DessertItem from "./DessertItem";
import { useDessert } from "./context/DessertContext";

function DessertList() {
  const { desserts } = useDessert();
  return (
    <section>
      <header className="mb-[2.5rem] w-fit text-[3.5rem] font-bold text-rose-900">
        Desserts
      </header>
      <div role="menu">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[2rem]">
          {desserts.map((dessert) => (
            <DessertItem dessert={dessert} key={dessert.name} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DessertList;
