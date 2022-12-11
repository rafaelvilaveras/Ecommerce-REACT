import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { changeQnt } from '../features/cartR';

import "../css/qntbutton.css";

const QntButton = () => {

    const dispatch = useDispatch()
    const qnt = useSelector((state) => state.cartR.value.qnt)

    return (
            <div  className="qnt-container">
                <button onClick={() => {dispatch(changeQnt('-'))}} className="qnt-button">-</button>
                    <p className="qnt-content"><strong>{qnt}</strong></p>
                <button onClick={() => {dispatch(changeQnt('+'))}} className="qnt-button">+</button>
            </div>
        )
    
}
 
export default QntButton;