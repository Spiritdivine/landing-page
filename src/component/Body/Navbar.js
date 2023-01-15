import Logo from "./logo.png";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    return ( 
        <nav>
            <div className="navi">
                <div className="logo"><img src={Logo} alt="logo" style={{height:'5rem', width:'150px'}}></img></div>
                <div>
                    <ul className="shoeNavs">
                        <li>9 Elite</li>
                        <li>15 Elite</li>
                        <li>VIII Elite</li>
                        <li>Legend 9</li>
                    </ul>
                </div>
                <div>
                    <div style={{marginRight:'10px'}}>Contact</div>
                    <div><FiShoppingCart/></div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;