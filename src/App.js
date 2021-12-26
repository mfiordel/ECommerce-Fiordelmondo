import './App.css';
import NavBar from './components/navBar/NavBar';
import "tailwindcss/tailwind.css"
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CartWidget from './components/cartWidget/CartWidget';
import CartView from './components/cartView/CartView';
import CartContextProvider from './context/CartContext';
import Checkout from './components/checkout/Checkout';
import RestrictedRoute from './components/restrictedRoute/RestrictedRoute';
import Logged from './components/logged/Logged'
import { UserContextProvider } from './context/UserContext';


function App() {
  return (
    <UserContextProvider>
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
            <Route path = "/userLogged" element ={<RestrictedRoute>
                                                  <Logged/>
                                                </RestrictedRoute>}/>
            <Route element={<h2>Not found</h2>}/>
          </Routes>
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
