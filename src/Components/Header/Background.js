import Search from "../Header/SearchBar/index"
import './/Banner.css';
import  VideoBG from "../../Images/BannerVideo.mp4";

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MySlider from "./BackgroundVideo";

const Background = () => {
    return (
    <div>
 
  
    <div
      className="background-image-div"
    >
    <MySlider/>
    </div>
  
    </div>
  );
};

export default Background;
