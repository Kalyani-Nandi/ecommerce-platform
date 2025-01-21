import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Product.module.css";

function ProductSlider({ images,address }) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...sliderSettings}>
      {images?.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Image of ${address}`}
          className={style.image}
        />
      ))}
    </Slider>
  );
}

export default ProductSlider;
