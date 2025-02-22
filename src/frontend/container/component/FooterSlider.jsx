import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FooterSlider() {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    // variableWidth: true,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className=" slider-container sliderCustom ">
      <Slider {...settings}>
        <a href="https://www.eci.gov.in/" target="_blank">
          <img src="./assets/footer_img1.png" alt="Image 1" />
        </a>

        <a href="https://www.digitalindia.gov.in/" target="_blank">
          <img src="./assets/footer_img2.png" alt="Image 1" />
        </a>

        <a href="https://www.mygov.in/" target="_blank">
          <img src="./assets/footer_img3.png" alt="Image 1" />
        </a>

        <a href="https://www.data.gov.in/" target="_blank">
          <img src="./assets/footer_img4.png" alt="Image 1" />
        </a>

        <a href="http://india.gov.in/" target="_blank">
          <img src="./assets/footer_img5.png" alt="Image 1" />
        </a>

        <a href="https://www.makeinindia.com/" target="_blank">
          <img src="./assets/footer_img6.png" alt="Image 1" />
        </a>
      </Slider>
    </div>
  );
}

export default FooterSlider;
