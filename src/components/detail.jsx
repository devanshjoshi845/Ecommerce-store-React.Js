import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Detail({cart, setcart }) {
 let [products,setproducts]=useState([])
let {id}=useParams()
useEffect(()=>{
  let fetchpd=async()=>{
   let res=await fetch(`https://fakestoreapi.com/products/${id}`);
   let data=await res.json()
   setproducts(data)
  };
  fetchpd();
 },[])
 function click(){
  setcart([...cart,products])

}
  return (
    <div >
       <h1 className='h1d' style={{fontSize:"50px",color:"coral" ,textAlign:"center",textDecoration:"underLine",textShadow:"10px 10px 10px black",marginTop:"2px"
  }}>Detail Page of Product</h1>
    <div className='detailpage'>
   
    <h1 className='heading'>{products.title}</h1>
    <img src={products.image} alt="" />

<div className='pd'>
  <h1> <span className='s'  >price:</span> {products.price} $</h1>
  <h1> <span className='s' > category:</span>{products.category}</h1>
</div>
<p> <span className='s' style={{fontSize:"40px"}}>description: </span> {products.description}</p>
<button className="button bt1"onClick={click}>
          Add to cart
        </button>
        <button className='bt2' onClick={()=>setcart(cart.filter((e)=>e.id != products.id))}>remove to cart</button>
    </div>
    </div>
  )
}

export default Detail