import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { HiMenu } from "react-icons/hi";
import { toggleOption } from "../features/togglesR";
import {IoClose} from "react-icons/io5";

import "../css/nav.css";

import {Product} from "./challengeData";



import cart1 from "../img/icon-cart.svg";
import user from "../img/image-avatar.png";
import logo from "../img/logo.svg";
import InnerCart from "./innerCart";

const Navbar = () => {

    const cart = useSelector((state) => state.cartR.value.cart);
    const TValue = useSelector((state) => state.togglesR.value);
    const dispatch = useDispatch();

    //Test code, note mine//

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      
        function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(
          getWindowDimensions()
        );
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
        return windowDimensions;
      }

      const { height, width } = useWindowDimensions();

    // Test code, note mine, it's from this guy: https://stackoverflow.com/users/4484822/qop //


    return (
            <nav className="nav-container">
                <ul className="nav-content-container">
                    <li className="nav-l-r">
                        <HiMenu
                            onClick={() => {dispatch(toggleOption('routesbar'))}}
                            className="nav-burger-menu"
                        />
                        <img className="nav-logo" src={logo}></img>
                        <div className= {width <= 500 && TValue.routesbar === 0 ? 'display-none' : 'routes-lightbox'}>
                            <div className= {width <= 500 && TValue.routesbar === 0 ? 'display-none' : 'nav-routes'}>
                                <IoClose 
                                    className= {width <= 500 ? "routes-close" : 'display-none'}
                                    onClick={() => {dispatch(toggleOption('routesbar'))}}    
                                />
                                <a href="#">Collections</a>
                                <a href="#">Men</a>
                                <a href="#">Women</a>
                                <a href="#">About</a>
                                <a href="#">Contact</a>
        
                            </div>
                        </div>
                    </li>
                    
                    <li className="nav-u-c">
       
                        <button onClick={() => {dispatch(toggleOption('cartbar'))}} className="nav-cart">
                            <div className={cart === 0 ? 'cart-qnt-0' : 'cart-qnt' }>
                                {cart === 0 ? '' : 
                                    <p><strong>{cart}</strong></p>
                                }
                            </div>
                            <img src={cart1} alt={Product[0].title}></img>
    
                        </button>
                        <img className="nav-user" src={user}></img>
                    </li>
                </ul>
                {TValue.cartbar === 0 ? '' : 
                    <div className="cartbar-container">
                        <h4 className="cb-title">Cart</h4>
                        <div>
                                {cart === 0 ? 
                                    <p className="cb-content">Your cart is empty.</p>
                                     
                                    : 

                                    <InnerCart
                                        cart = {cart}
                                    />
                                }
                        </div>
                    </div>
                }
                <hr/>
            </nav>
    )
}
 
export default Navbar;