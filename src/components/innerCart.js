import React from 'react';
import {Product, Album } from "./challengeData";
import {checkCart, removeItem} from "../features/cartR";
import { useDispatch } from 'react-redux';

import '../css/innerCart.css'

import del from '../img/icon-delete.svg'


const InnerCart = ({cart}) => {

    const dispatch = useDispatch()


    return ( 
        <div className='innercart-geral-container'>

            <section className='innercart-content-container'>
                <div className='innercart-product-img'>
                    <img src={Album[0].img}></img>
                </div>
                <div className='innercart-text-content'>
                    <p className='innercart-item'>{Product[0].title}</p>
                    <div className='innercart-price-content'>
                        <p>${Product[0].discounttag === 0 ? Product[0].baseprice : (Product[0].baseprice * (Product[0].discounttag/100)).toFixed(2)} x {cart}</p>
                        <p className='innercart-total'><strong>${Product[0].discounttag === 0 ? Product[0].baseprice * cart : ((Product[0].baseprice * (Product[0].discounttag/100)*cart)).toFixed(2)}</strong></p>
                    </div>
                </div>
                <button 
                className='innercart-del-button'
                onClick={() => dispatch(removeItem())}
                >
                    <img src={del}></img>
                </button>
            </section>

            <button 
            className="innercart-checkout-button"
            onClick={() => {dispatch(checkCart())}}
            >
                <h3>Checkout</h3>
            </button>

        </div>
     );
}
 
export default InnerCart;