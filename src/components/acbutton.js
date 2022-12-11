import React from 'react';
import "../css/acbutton.css";
import { useDispatch } from 'react-redux';
import { addCart } from '../features/cartR';

import cart1 from "../img/icon-cart.svg";

const AcButton = () => {

    const dispatch = useDispatch()

    return (
         
        <div className="button-container">
            <button onClick={() => {dispatch(addCart())}} id="btn">
                <div className="cart-container">
                    <img id="cart" src={cart1} aria-hidden="true"/>
                </div>
                <p>
                    Add to Cart
                </p>
            </button>
        </div>
     );
}
 
export default AcButton;