import React, { useEffect, useState } from "react";
import "../css/selector.css";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { moveSel, toggleLb, changeByIndex } from '../features/selectorR';


import { Album } from "./challengeData";

const ImgSlider = () => {


    const dispatch = useDispatch()
    const num = useSelector((state) => state.selectorR.value.num)
    
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

        <section className="image-container">

            <button
                className="sl-previous"
                onClick={() => {dispatch(moveSel({operator: '-', length: Album.length}))}}
            >
                <MdKeyboardArrowLeft
                    className="se-arrow"
                />
            </button>

            <button
                className="sl-next"
                onClick={()=> {dispatch(moveSel({operator: '+', length: Album.length}))}}
            >
                <MdKeyboardArrowRight
                    className="se-arrow"
                />
            </button>

            <button 
            className="big-image"
            onClick={() => {width > 500 ? dispatch(toggleLb()) : dispatch(moveSel({operator: '+', length: Album.length}))}}
            >
                <img src={Album[num].img} alt={Album[num.alt]}></img>
            </button>
            <div className="small-image">
                {Album.map((val, index) => {
                    
                    return(
                        <button
                            onClick={() => {dispatch(changeByIndex(index))}}
                            className={index === num ? 'active' : 'notA'}  
                            key={index}
                        >
                            <img
                                className= {index === num ? 'sm-Img-A' : 'sm-Img-N'}   
                                src={val.img}
                                alt={val.alt}    
                            >

                            </img>
                        </button>
                        
                    )
                })}
            </div>
        </section>

    );
}
 
export default ImgSlider;