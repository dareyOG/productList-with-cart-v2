type DessertProps = {
  children: React.ReactNode;
};

function Dessert({ children }: DessertProps) {
  return (
    <main className="grid gap-20 bg-rose-100/50 p-[5rem] lg:grid-flow-col lg:grid-cols-[70fr_30fr]">
      {children}
    </main>
  );
}

export default Dessert;
