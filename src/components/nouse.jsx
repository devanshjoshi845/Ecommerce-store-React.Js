/*import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Card({ products }) {
 let [cart,setcart]=useState([])
 

  function addCart(title,price) {
   
    console.log(title,price)
    let data={
      title:title,
      price:price
    }
    console.log(data)
    setcart([...cart,data])
    console.log(cart)
   /* let newdata = {
    title: pdtitle,
     price: pdprice,
   };     
   setdata([...data, newdata]);
 
   console.log(newdata)
    console.log(data)
    
  }

  return (
    <Link to={`/products/${products.id}`} style={{ textDecoration: "none" }}>
      <div className="card">
        <img src={products.image} alt="" />
        <p className="card-h1" >
          {products.title}
        </p>
        <h3 className="card-price" >
          {products.price}
        </h3>
        <button className="button"onClick={() => addCart(products.price,products.title)}>
          Add to cart
        </button>
      </div>
    </Link>
  );
}

export default Card;
//  <Link
// onClick={() => addCart(products.price,products.title)}
// let [alldata, setalldata] = useState([]);

 /* function addCart(price,title) {
    
    let data = {
      title: title,
      price: price,
    };
   
        
    setalldata([...alldata, data]);
   console.log(data)
    console.log(alldata)
    
  }
  */