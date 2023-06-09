import Search from "./SearchBar/index"
import './/Banner.css';
import  VideoBG from "../../Images/BannerVideo.mp4";
import Slider from 'react-slick';
import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import  ImageOne  from "../../Images/Slidetwo.jpg";
import  Imagetwo  from "../../Images//Slidefour.jpg";
import  Imagethree  from "../../Images/Slidethree.jpg";

class MySlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: false ,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      fade:true
    };

    return (
      <Slider {...settings}>
        <div>
         <img src={ImageOne} alt="slide_1" />
        </div>
        <div>
        <img src={Imagetwo} alt="slide_2" />
        </div>
        <div>
        <img src={Imagethree} alt="slide_3" />
        </div>
      </Slider>
    );
  }
}
export default MySlider;
