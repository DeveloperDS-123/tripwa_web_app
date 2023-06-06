import { Route, Routes, useLocation } from "react-router-dom";
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
import Login from "./pages/login";
import { useEffect } from "react";

const AppRoutes = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      {location.pathname !== "/login" && (
        <>
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
        </>
      )}
    </>
  );
};

export default AppRoutes;
