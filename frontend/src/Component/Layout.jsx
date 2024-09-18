

import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <>
        <input type="checkbox" name="" id="demo"/>
        <div id="nav">
        <img src="/src/image/logoo.svg"/>
        <div id="link">
            <Link to="/home" style={{paddingLeft:"25px",textDecoration:"none"}}>
            Home
            </Link>
            <Link to="/about" style={{paddingLeft:"25px",textDecoration:"none"}}>
            About
            </Link>
            <Link to="/menu"  style={{paddingLeft:"25px",textDecoration:"none"}}>
            Our Menu
            </Link>
            <Link to="/order" style={{paddingLeft:"25px",textDecoration:"none"}}>
            Order
            </Link>
            <Link to="/blog" style={{paddingLeft:"25px",textDecoration:"none"}}>
            Blog
            </Link>

           
            </div>

            <div id="icon">
             <Link>
             <IoSearch />
             </Link>

            <Link>
            <FaShoppingCart />
            </Link>
            </div>

            <label for="demo">
            <FaBars />
             </label>

              </div>


            <Outlet/>
        </>
     );
}
 
export default Layout;