import {  Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Eror from "./Components/Eror";
import Tour from "./Components/Tour";
import ThingsToDo from "./Components/Header/ThingsToDo"
import PlaceToVisit from "./Components/Header/PlaceToVisit"
import PlanMyTrip from "./Components/Header/PlanMyTrip"
import PackageDetails from "./Components/Header/PackageDetails"
import TourGuide from "./Components/Header/TourGuide"
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import Booknow from "./Components/Header/Booknow"


const AppRoutes = () => {
const location=useLocation();
  return (
  <>
  {location.pathname !== "/"&&<HeaderNavBar/>}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/eror" element={<Eror />} />
      <Route path="/eror" element={<Eror />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/things-to-do" element={<ThingsToDo />} />
      <Route path="/places-to-visit" element={<PlaceToVisit />} />
      <Route path="/plan-my-trip" element={<PlanMyTrip />} />
      <Route path="/package-details" element={<PackageDetails />} />
      <Route path="/tour-guide" element={<TourGuide />} />
      <Route path="/Book Now" element={<Booknow />} />
      {/* <Route path="/Flights" element={<flights/>} /> */}
      {/* <Route path="/Rent a Car" element={<car/>} /> */}
    </Routes>
    <Footer />
</>
  )
};

export default AppRoutes;
