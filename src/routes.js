import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Eror from "./Components/Eror";
import Tour from "./Components/Tour";

const AppRoutes = () => {
  // const navigate = useNavigate()

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/eror" element={<Eror />} />
        <Route path="/eror" element={<Eror />} />
        <Route path="/tour" element={<Tour />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
