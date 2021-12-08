import './App.css';
import NavBar from './components/navBar/NavBar';
import "tailwindcss/tailwind.css"
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import CartWidget from './components/cartWidget/CartWidget';
import CartContextProvider from './Context/CartContext'

function App() {
  return (
    <CartContextProvider >
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path = "/" ><ItemListContainer/></Route>
        <Route exact path = "/category/:categoryId"><ItemListContainer/></Route>
        <Route exact path = "/item/:id" ><ItemDetailContainer/></Route>
        <Route exact path = "/shop" ><CartWidget/></Route>

        <Route element={<h2>Not found</h2>}/>
      </Switch>
    </Router>
    </CartContextProvider>
  );
}

export default App;
