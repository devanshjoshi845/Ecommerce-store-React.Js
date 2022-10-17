import React, { useEffect, useState } from "react";
import Card from "./Card";
function Product({ cart, setcart, search }) {
  let [products, setproducts] = useState([]);

  useEffect(() => {
    let fetchpd;

    {
      search.length > 5
        ? (fetchpd = async () => {
            let res = await fetch(
              `https://fakestoreapi.com/products/category/${search}`
            );
            let data = await res.json();
            //console.log(data);
            setproducts(data);
          })
        : (fetchpd = async () => {
            let res = await fetch("https://fakestoreapi.com/products");
            let data = await res.json();
            //console.log(data);
            setproducts(data);
          });
    }
    fetchpd();
  }, [search]);

  return (


  
    <div className="product-wraper">
      <h1 style={{ paddingLeft: "30px" }}>WELCOME TO APNA STORE</h1>
      <h1
        style={{
          paddingLeft: "30px",
          color: "black",
          textAlign: "center",
          textDecoration: "underline",
          fontSize: "50px",
        }}
      >
        PRODUCTS
      </h1>
      <div className="cards">
        {products.map((products) => (
          <Card
            products={products}
            key={products.id}
            cart={cart}
            setcart={setcart}
            
          />
        ))}
      </div>
    </div>

    
  );
}

export default Product;
/* {
      products.map((data)=>{
       return(
        <div>
         {data.category}
       
        </div>
       )
      })
     }*/
/* {
                    products.map(products => (
                        <Card products={products} />
                    ))
                }
    */

/*useEffect(()=>{
  
 let fetchpd=async()=>{
  let res=await fetch("https://fakestoreapi.com/products");
  let data=await res.json()
  //console.log(data);
  setproducts(data)
 };
 fetchpd();
},[])*/


/* <div className="product-wraper">
      <h1 style={{ paddingLeft: "30px" }}>WELCOME TO APNA STORE</h1>
      <h1
        style={{
          paddingLeft: "30px",
          color: "black",
          textAlign: "center",
          textDecoration: "underline",
          fontSize: "50px",
        }}
      >
        PRODUCTS
      </h1>
      <div className="cards">
        {products.map((products) => (
          <Card
            products={products}
            key={products.id}
            cart={cart}
            setcart={setcart}
          />
        ))}
      </div>
    </div>
*/
