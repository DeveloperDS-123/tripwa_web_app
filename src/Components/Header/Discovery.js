import './/Stylesheet.css';
import DiscoveryCards from './DiscoveryCards'
import { useNavigate } from "react-router-dom";

const Discovery = () => {
  const navigate = useNavigate();
  const navigateToBookNow = () => {
    
    navigate('/Booknow');
  };
  return (
    <div
      className="Discovery_card main_efort"
    >
    <div className="container">
    <div className='row section_header'>
      <div className='section_title'>
        <h2 className='section_title'>Events and Festivals</h2>
        <p className='section_dis' >Popular places to recommends for you</p>
      </div>
      {/* <div className='section_target'>
       <p>Explore More +</p>
      </div> */}
    </div>
    <div className="row">

       <DiscoveryCards />
       <DiscoveryCards />
       <DiscoveryCards />
       <DiscoveryCards />
       <DiscoveryCards />
    
    </div>
    <div className='row'>
    <button className='book_now' onClick={navigateToBookNow} >Book Now</button>
    </div>
    </div>
    </div>
  );
};

export default Discovery;
