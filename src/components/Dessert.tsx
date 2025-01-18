type DessertProps = {
  children: React.ReactNode;
};

function Dessert({ children }: DessertProps) {
  return <main className="grid gap-5 lg:grid-flow-col lg:grid-cols-[70fr_30fr]">{children}</main>;
}

export default Dessert;
