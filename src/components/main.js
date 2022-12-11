import "../css/main.css";
import React, { useState } from 'react';

import AcButton from "./acbutton";
import QntButton from "./qntbutton";
import ImgSelector from "./selector";
import { Product } from "./challengeData";


const Main = () => {
    

    return ( 
        <main className="product-container">

            <ImgSelector/>

            <section className="content-container">
                <p className="product-brand">
                    {Product[0].brand }
                </p>
                <h1 className="product-title">
                    {Product[0].title}
                </h1>
                <p className="product-description">
                    {Product[0].description}
                </p>

                <div className="price-container">
                    <div className="price-n-d"> {/* new and discount */}
                        <h2 className="price-new">
                            ${Product[0].discounttag === 0 ? Product[0].baseprice : (Product[0].baseprice * (Product[0].discounttag/100)).toFixed(2)}
                        </h2>
                        <p className={Product[0].discounttag === 0 ? "no-display" : "discount"}><strong>
                                    {Product[0].discounttag}%
                                </strong></p>
                    </div>
                    <del className= {Product[0].discounttag === 0 ? "no-display" : "price-old"}>
                        ${(Product[0].baseprice).toFixed(2)}
                    </del>
                </div>
                <section className="buttons-container">
                    <QntButton/>
                    <div className="ac-container">
                        <AcButton/>
                    </div>
                </section>
            </section>
        </main>
     );
}
 
export default Main;