import React from 'react';
import "../css/lightbox.css";
import {IoClose} from "react-icons/io5";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { moveSel, toggleLb, changeByIndex } from '../features/selectorR';


import { Album } from "./challengeData";

const LightBox = () => {


    const dispatch = useDispatch()
    const aux = useSelector((state) => state.selectorR.value.aux)
    const lb = useSelector((state) => state.selectorR.value.lightbox)
    const pageWidth = window.screen.width

    return (

        <div className={lb === 1 && pageWidth > 500 ? "lb-background" : 'no-display' }>

            <section className="lb-img-container">

                <button
                    className="lb-close"
                    onClick={() => {dispatch(toggleLb())}}
                >
                    <IoClose
                        className="lb-close-icon"
                    />
                </button>


                <button
                    className="lb-previous"
                    onClick={() => {dispatch(moveSel({operator: '-', length: Album.length}))}}
                >
                    <MdKeyboardArrowLeft
                        className="lb-arrow"
                    />
                </button>

                <button
                    className="lb-next"
                    onClick={() => {dispatch(moveSel({operator: '+', length: Album.length}))}}
                >
                    <MdKeyboardArrowRight
                        className="lb-arrow"
                    />
                </button>

                <button 
                    className="bigger-image"
                    onClick={() => {dispatch(toggleLb())}}
                >
                    <img src={Album[aux].img} alt={Album[aux].alt}></img>
                </button>
                <div className="smaller-image">
                    {Album.map((val, index) => {
                        return(
                            <button
                                onClick={() => {dispatch(changeByIndex(index))}}
                                className={index === aux ? 'active' : 'notA'}  
                                key={index}
                            >
                                <div className="sm-img-div">
                                    <img
                                        className= {index === aux ? 'sm-Img-A' : 'sm-Img-N'}   
                                        src={val.img}
                                        alt={val.alt}
                                    >

                                    </img>
                                </div>
                            </button>
                                    
                        )
                    })}
                </div>
            </section>

                    

        </div> 
    );
}
 
export default LightBox;