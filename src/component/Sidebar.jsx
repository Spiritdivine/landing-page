import './Sidebar.css';
import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import { FiShoppingCart } from "react-icons/fi";

export default props => {
  return (
    <Menu right>
        <ul className="shoeNavs">
            <li>9 Elite</li>
            <li>15 Elite</li>
            <li>VIII Elite</li>
            <li>Legend 9</li>
            <li>Contact</li>
            
            <li className="cart"><FiShoppingCart/></li>
            
        </ul>
    </Menu>
  );
};