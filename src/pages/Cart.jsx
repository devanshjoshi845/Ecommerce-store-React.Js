import React, { useEffect, useState } from "react";
import Product from "../components/Product";

function Cart({ cart, setcart }) {
 
  let [price, setprice] = useState(0);
  let [length, setlength] = useState(0);
  useEffect(() => {
    setlength(cart.length);
  }, [cart]);

  useEffect(() => {
    const sum = cart.reduce((partialSum, cart) => partialSum + cart.price, 0);
    setprice(sum);
  }, [cart]);

  function clicks(id) {
    let flag = id;
    let newCart = cart.filter((e) => {
      if (e.id === flag) {
        flag = null;
        return false;
      }

      return true;
    });
    setcart(newCart);
  }

  function click(id){
    setcart(cart.filter((e)=>e.id !=id))
  }

  return (
    <div>
      <span style={{ fontSize: "40px", marginLeft: "300px",textDecoration:"underLine" }}>
        my cart: <span style={{ color: "blue" }}>{length}</span>{" "}
      </span>
      <span style={{ fontSize: "40px", marginLeft: "300px" ,textDecoration:"underLine"}}>
        total: <span style={{ color: "purple" }}>{price}</span>{" "}
      </span>

      <div className="product-wraper" id="c">
        {cart.map((products) => { 
          return (
            <div className="card remove-card">
              <img src={products.image} alt="" />
              <p className="card-h1">{products.title.slice(0, 30) + "..."}</p>
          <h3 className="card-price">price: {products.price}$</h3>
          <button className="cir" onClick={()=>clicks(products.id)}><span class="material-symbols-outlined">
remove
</span> quantity</button>
              <button className="remove" onClick={() => click(products.id)} >
                remove to cart
              </button>
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
/* <button className="button"onClick={()=>setcart(cart.filter((e)=>e.id!=products.id))}>
remove to cart
</button>*/
// ()=>setcart(cart.filter((e)=>e.id!=products.id))
//()=>setcart(cart.filter((e)=>e.id!=products.id))
//
//
///
/// devansh  joshi 
// akansh joshi 
// devanhs joshi
// 
// devansh josshi
// 
// devansh joshi 
// devnah joshi
/// devansh joshi
/// 
//
//
 //
  
