import React from 'react'

import { FaHome } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar flex bg-slate-950 text-white justify-between p-4 text-lg capitalize  items-center  ">
  
<div className="box1 flex  gap-5 items-center">
<div className="home"><FaHome /></div>
<div className="home">Go To Dashboard </div>
<div className="dot"></div>


</div>
<div className="box2  ">

<ul className='flex  gap-5 items-center'>
<li>ecomm</li>
<li><FaCartArrowDown /> 
{/* <span>0</span> */}
</li>
<li>about us </li>
<li>contact us </li>
<li>sign up </li>
<li>sign in </li>

</ul>

</div>
</div>
  )
}

export default Navbar