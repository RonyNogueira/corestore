import React, { useEffect } from "react";
import Slider from "react-slick";
import star from "../../assets/img/Rating.png"
import off from "../../assets/img/polygon.png"
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons'
import apiWhatsapp from "../../services/apiWhatsaap"
import ReactStars from "react-rating-stars-component";
import { installmentPrice } from "../../services/utils/installments";
import "./style.css"
import { Button } from "../Button";

const mensagem = "Olá gostaria de comprar seu produto - "

const ProductSlider = ({products}) =>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
          }
        }
      ]
  };


    return(
        <div className="product-slider">
            <h1>Mais vendidos</h1>
        <Slider {...settings}>
            {
                products.map((product, index)=>(
                <div key={index}>
                    <div className="product-slider-box">
                        <img className='product-flag' src={off} alt="" />
                            <div className="product-content">
                            
                                <img src={product.img} alt="" />
                                <p className='product-title'>{product.title}</p>
                                <ReactStars
                                    count={5}
                                    value={product.rating}
                                    edit={false}
                                    activeColor="#ffd700"
                                    classNames="rating"
                                />
                                <p className='product-old'>{product.oldPrice}</p>
                                <p className='product-now'>por R$ {product.newPrice}</p>
                                <p className='product-installments'>ou em 9x de R$ {installmentPrice(product.newPrice, 9)}</p>
                                <a href={`${apiWhatsapp}15998414182&text=${encodeURI(mensagem)}${encodeURI(product.title)}`} target="_blanc">
                                    <Button
                                        text="Comprar"
                                        icon={faWhatsapp}
                                    />
                                </a>
                            </div>
                    </div>
                </div>
                ))
            }
        </Slider>
      </div>
    )

}

export {ProductSlider}