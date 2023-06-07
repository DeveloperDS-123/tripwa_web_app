import { BrowserRouter, Route, Routes } from "react-router-dom";
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


const AppRoutes = () => {

  return (
  <>
  <HeaderNavBar/>
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
    </Routes>
    <Footer />
</>
  )
};

export default AppRoutes;
