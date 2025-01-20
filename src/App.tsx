import Cart from "./components/Cart";
import Dessert from "./components/Dessert";
import DessertList from "./components/DessertList";
import OrderModal from "./components/OrderModal";

function App() {
  return (
    <>
      <Dessert>
        <DessertList />
        <Cart />
      </Dessert>
      <OrderModal />
    </>
  );
}

export default App;
