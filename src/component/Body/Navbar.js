import Logo from "./logo.png";
import { FiShoppingCart } from "react-icons/fi";
import Sidebar from "../Sidebar";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {

    return ( 
        <nav>
            <div className="navi">
                <div className="logo"><Link to="/"><img src={Logo} alt="logo" ></img></Link></div>
                <div className="myLinks">
                    <ul className="shoeNavs">
                        <li><Link to="second">9 Elite</Link></li>
                        
                        <li>15 Elite</li>
                        <li>VIII Elite</li>
                        <li>Legend 9</li>
                        <li>Contact</li>
                        
                        <li className="cart"><FiShoppingCart/></li>
                        
                    </ul>
                </div>
                <div className="burg">
                    <Sidebar/>
                </div>
                
                
            </div>
            <Outlet/>
        </nav>
     );
}
 
export default Navbar;