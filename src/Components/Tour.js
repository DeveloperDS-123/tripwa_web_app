import Ticket from "../../src/Images/flightbooking.jpg";
import Hotel from "../../src/Images/Hotelbooking.jpg";
import Car from "../../src/Images/car rent.jpg";


const Tour = () => {
  return(
    <div className="tour-guide">
    <div className="bg-image-div">
      <div className="container">
     <div className="row">
      <h1 style={{textAlign:'center'}}>Tour Guide</h1>
      <p>Save 10% or more at participating properties- just<br></br> look for blue Genius Label</p>
      </div>
      </div>
    </div>
<div className="tour-steps">
<div className="ticket-booking">
    <div className="container">
     <div className="row">
      <div className="ticket-text">
      <h1>Ticket Booking</h1>
      <ul>
        <li>Look for flight tickets beforehand</li>
        <li>Enter your details on website</li>
        <li>Choose your stops</li>
        <li>Choose your seat</li>
        <li>Book your ticket</li>
        <li>Confirm your receipt</li>
        </ul>
      </div>
      <div className="ticket-image">
      <img src={Ticket} alt="booking" />
      </div>
      </div>
      </div>
      </div>

      <div className="hotel-booking">
    <div className="container">
     <div className="row">
     <div className="Hotel-image">
      <img src={Hotel} alt="booking" />
      </div>
      <div className="Hotel-text">
      <h1>Hotel Booking</h1>
      <ul>
        <li>Search for your destination</li>
        <li>Filter your hotel results</li>
        <li>Checkout the hotel location</li>
        <li>Look at all the rooms options available</li>
        <li>Book the room</li>
        <li>Manage your booking</li>
        </ul>
      </div>
      </div>
      </div>
      </div>

      <div className="Car-booking">
    <div className="container">
     <div className="row">
     <div className="Car-text">
      <h1>Rental Car</h1>
      <ul>
        <li>Search for your location</li>
        <li>Have a valid driver’s license</li>
        <li>Verify age restrictions</li>
        <li>Select the vehicle of your choice</li>
        <li>Have a valid form of payment</li>
        <li>Return your vehicle on time</li>
        </ul>
      </div>
      <div className="Car-image">
      <img src={Car} alt="booking" />
      </div>
      </div>
      </div>
      </div>
      
      </div>
    </div>
  );
}

export default Tour;