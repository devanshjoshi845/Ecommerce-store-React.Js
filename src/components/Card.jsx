import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ products, cart, setcart }) {
  function click() {
    setcart([...cart, products]);
  
  }

  return (
    <div className="main-card">
      <Link to={`/products/${products.id}`} style={{ textDecoration: "none" }}>
        <div className="card" id="d">   
          <img src={products.image} alt="" />
          <p className="card-h1">{products.title.slice(0, 30) + "..."}</p>
          <h3 className="card-price">price: {products.price}$</h3>
        </div>
      </Link>
      <button className="button" onClick={click}>
        Add to cart
      </button>
    </div>
  );
}

export default Card;
//
