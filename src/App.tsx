import Cart from "./components/Cart";
import Dessert from "./components/Dessert";
import DessertList from "./components/DessertList";
import OrderModal from "./components/OrderModal";
import { useDessert } from "./components/context/DessertContext";

function App() {
  const { isModalActive } = useDessert();
  return (
    <>
      <Dessert>
        <DessertList />
        <Cart />
      </Dessert>
      {isModalActive && <OrderModal />}
    </>
  );
}

export default App;
