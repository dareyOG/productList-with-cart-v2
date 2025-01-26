import React from "react";

function Dessert({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid gap-20 bg-rose-100/50 p-[3rem] lg:grid-flow-col lg:grid-cols-[7fr,3fr]">
      {children}
    </main>
  );
}

export default Dessert;
