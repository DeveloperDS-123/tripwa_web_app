import Search from "./SearchBar/index"
import './/Banner.css';
import './/Stylesheet.css';
import Plane from "../../Images/plane 1.png";
import Car from "../../Images/car.png";
import Hotel from "../../Images/hotel.png";
import Guide from "../../Images/guide.png";
import Passport from "../../Images/passport.png"
import Insurance from "../../Images/travel-insurance.png"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Service = () => {
  const navigate = useNavigate();
  return (
    
    <div
      className="Service_block"
    >
    
    <div className="container">
    
     <div className="row" >
     <div className="book-flight service_card">
      <img src={Plane} alt="Image" />
      <b><p onClick={navigate("/ThingsToDo")}>Book a flight</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>

      <div className="book-car service_card">
      <img src={Car} alt="Image" />
      <b><p>Rent a Car</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>

      <div className="book-hotel service_card">
      <img src={Hotel} alt="Image" />
      <b><p>Reserve Stays</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>

      <div className="book-guide service_card">
      <img src={Guide} alt="Image" />
      <b><p>Find a Tour Guide</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>

      <div className="Insurance service_card">
      <img src={Insurance} alt="Image" />
      <b><p>Travel Insurance</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>

      <div className="Visa service_card">
      <img src={Passport} alt="Image" />
      <b><p>Apply Visa</p></b>
      <p>We are extremely easy for you to approach and contact.</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Service;
