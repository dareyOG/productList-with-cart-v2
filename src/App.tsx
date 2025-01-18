import Cart from './components/Cart';
import Dessert from './components/Dessert';
import DessertList from './components/DessertList';
// import Modal from './components/Modal';

function App() {
  return (
    <>
      <Dessert>
        <DessertList />
        <Cart />
      </Dessert>
      {/* <Modal /> */}
    </>
  );
}

export default App;
