import './App.css';
import NavBar from './components/navBar/NavBar';
import "tailwindcss/tailwind.css"
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path = "/" ><ItemListContainer/></Route>
        <Route exact path = "/category/:categoryId"><ItemListContainer/></Route>
        <Route exact path = "/item/:id" ><ItemDetailContainer/></Route>
        <Route element={<h2>Not found</h2>}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
