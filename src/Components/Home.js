import { useNavigate } from "react-router-dom";
import Header from "./Header/HeaderNavBar";
import Background from "./Header/Background";
import Service from "./Header/Service";
import Discovery from "./Header/Discovery";
import Explore from "./Header/Explore";
import Skiplagged from "./Header/Skiplagged";
import Footer from "./Footer";
import Guests from "./Header/Guests";

function Home() {
  return (
    <div>
      <Background />
      <Service />
      <Discovery />
      <Guests />
      <Explore />
      <Skiplagged />
      <Footer />
    </div>
  );
}

export default Home;
