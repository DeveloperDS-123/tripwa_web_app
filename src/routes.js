import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Flights from "./pages/Flights";
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import Stays from "./pages/Stays";
import Cars from "./pages/Cars";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <HeaderNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Flights />} />
        <Route path="/things-to-do" element={<Stays />} />
        <Route path="/visit" element={<Flights />} />
        <Route path="/plan-my-trip" element={<Flights />} />
        <Route path="/package-details" element={<Flights />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
