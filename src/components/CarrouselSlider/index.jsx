import React, { useEffect } from "react";
import Slider from "react-slick";
import "./style.css"


const CarrouselSlider = ({banners}) =>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
    useEffect(()=>{

    },[])
    return(
        <div>
        <Slider {...settings}>
          { banners.map((banner, index)=>(
              <div className="carrousel-content" key={index}>
                <div className='carrousel-text'>
                  <h1>{banner.title}</h1>
                  <h2>{banner.subTitle}</h2>
                </div>
                <img src={banner.img} alt="slide banner" />
              </div>
            ))
          }
        </Slider>
      </div>
    )

}

export {CarrouselSlider}