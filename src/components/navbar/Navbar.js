import React , {useState} from "react";
import {Link} from "react-router-dom"
import {MenuOutlined} from "@material-ui/icons"
import "./navbar.css"

const Navbar = () => {
    
   const [isMobile , setIsMobile] = useState(false);

    return (  
        <nav className="navbar">

           <Link to="/" className="logoHome">
             <h2 className="logo" >Vincii</h2>
           </Link>
           <ul className= {isMobile ? "nav-links-mobile" :"nav-links"} 
               onClick={() => setIsMobile(false)}
           >
                <Link to="/" className="home">
                  <li>Home</li>
                </Link>

                <Link to="/product" className="product">
                  <li>Product</li>
                </Link>

                <Link to="/feedback" className="feedback">
                 <li>Feedback</li>
              </Link>
           </ul>
           <button className="mobile-menu-icon"
             onClick={() => setIsMobile(!isMobile)}
           >
             {isMobile ? (
               <MenuOutlined />
             ) : (
               <MenuOutlined />
             )}
           </button>
        </nav>

     );
}
 
export default Navbar;