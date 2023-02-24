import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForSale from "./ForSale";
import Home from "./Home";
import Navbar from "./Navbar";
import ProductDetails from "./ProductInfo";
import SoldItems from "./SoldItem";
import SoldProductDetails from "./SoldProductInfo";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <img className="headline" src="/images/headline.PNG" />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/forsale">
          <ForSale />
        </Route>
        <Route path="/sold">
          <SoldItems />
        </Route>
        <Route path="/productdetails/:id">
          <ProductDetails />
        </Route>
        <Route path="/soldproductdetails/:id">
          <SoldProductDetails />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <footer>
        <p>Website made by Bradley Reynolds</p>
      </footer>
    </Router>
  );
}

export default App;
