import './App.css';
import NavBar from './components/navBar/NavBar';
import "tailwindcss/tailwind.css"
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CartWidget from './components/cartWidget/CartWidget';
import CartView from './components/cartView/CartView';
import CartContextProvider from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <CartContextProvider >
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path = "/" element={<ItemListContainer/>}></Route>
          <Route exact path = "/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route exact path = "/item/:id" element={<ItemDetailContainer/>}></Route>
          <Route exact path = "/shop" element={<CartWidget/>}></Route>
          <Route exact path= "/cart" element={<CartView/>}></Route>
          <Route exact path= "/checkout" element={<Checkout/>}></Route>
          <Route element={<h2>Not found</h2>}/>
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
