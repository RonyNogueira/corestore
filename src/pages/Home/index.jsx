import React from "react";
import { CarrouselSlider, News, ProductSlider } from "../../components";
import banners from "../../services/utils/banner.json"
import products from "../../services/utils/products.json"

const Home = () =>{
    return(
        <div>
            <CarrouselSlider banners={banners}/>
            <div className="container m-auto">
                <ProductSlider products={products}/>
            </div>
            <News/>
        </div>
    )
}

export {Home}