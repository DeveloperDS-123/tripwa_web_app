import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Error from "./pages/Error";
import TourGuide from "./pages/tourGuide";
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import AboutUs from "./pages/aboutUs";
import ThingsToDo from "./pages/thingsToDo";
import PlaceToVisit from "./pages/placeToVisit";
import PlanMyTrip from "./pages/planMyTrip";
import PackageDetails from "./pages/packageDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/error" element={<Error />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/places-to-visit" element={<PlaceToVisit />} />
        <Route path="/plan-my-trip" element={<PlanMyTrip />} />
        <Route path="/package-details" element={<PackageDetails />} />
        <Route path="/tour-guide" element={<TourGuide />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
