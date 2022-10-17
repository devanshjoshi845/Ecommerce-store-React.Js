import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Detail from "./components/detail";
import { useState } from "react";
import Product from "./components/Product";

function App() {
 
  let [cart, setcart] = useState([]);
  // let [price,setprice]=useState([])
  let length = cart.length;
  let [search, setsearch] = useState("");
  // console.log(price)
  //console.log(cart.length)

  //console.log(cart)
  return (
    <div className="App">
      <Router>
        <Navbar length={length} search={search} setsearch={setsearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Product
                cart={cart}
                setcart={setcart}
                search={search}
                setsearch={setsearch}
             
              />
            }
          />
          <Route
            path="/Cart"
            element={<Cart cart={cart} setcart={setcart}  />}
          />

          <Route
            path="/products/:id"
            element={<Detail cart={cart} setcart={setcart} />}
          />
          <Route path="/*" element={<h1>error page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
//
//products={products}
  //              setproducts={setproducts}