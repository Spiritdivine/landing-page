import Logo from "./logo.png";
import { FiShoppingCart } from "react-icons/fi";
import Sidebar from "../Sidebar";

const Navbar = () => {

    return ( 
        <nav>
            <div className="navi">
                <div className="logo"><img src={Logo} alt="logo" ></img></div>
                <div className="myLinks">
                    <ul className="shoeNavs">
                        <li>9 Elite</li>
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
        </nav>
     );
}
 
export default Navbar;