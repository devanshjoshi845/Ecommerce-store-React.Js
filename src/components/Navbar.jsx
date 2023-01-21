import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar({length,search,setsearch}) {

  return (
    <div className='Nav' >
    <span className='logo' >APNA store</span>
    <input type="text" placeholder='search-Category [LIKE-jewelery,electronics]'onChange={(e)=>setsearch(e.target.value)} id="ip"/>
    <div className='link'>
<Link to='/' className='navlink' > <span class="material-symbols-outlined">
<span class="material-symbols-outlined" style={{fontSize: "40px",}}>
home
</span>
</span>Home</Link>

<Link to='/Cart' className='navlink'  > <span class="material-symbols-outlined" style={{fontSize: "40px",}}>
shopping_cart
</span>Cart</Link>

<span className='cartcount'><span class="material-symbols-outlined" style={{fontSize: "40px",}}>
add_shopping_cart
</span  >{length} </span>
    </div>
    <div className='windowpage'>
      <div className='box'></div>
    </div>
    </div>
  )
}

export default Navbar