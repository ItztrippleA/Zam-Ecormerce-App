import Home from "./pages/Home/Home";
import Register from "./pages/Home/Register";
import Login from "./pages/Home/Login";
import Cart from "./pages/Home/Cart";
import Product from "./pages/Home/Product";
import Products from "./components/Products";
import ProductList from "./pages/Home/ProductList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/product/:category">
          <ProductList />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
