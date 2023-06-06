import { useNavigate } from "react-router-dom";
import Header from "./Header/HeaderNavBar";
import Background from "./Header/Background";
import Service from "./Header/Service";
import Discovery from "./Header/Discovery";
import Explore from "./Header/Explore";
import Skiplagged from "./Header/Skiplagged";
import Footer from "./Footer";
import Guests from "./Header/Guests";
import About from "./About";

function Home() {
  const navigate = useNavigate();
  const navItems = [
    {
      id: 1,
      name: "Home",
      onclick: () => navigate("/home"),
    },
    { id: 2, name: "About Us", onclick: () => navigate("/About_Us") },
    { id: 3, name: "Things to Do", onclick: () => navigate("/Things to Dos") },
    { id: 4, name: "Places to Visit", onclick: () => navigate("/visit") },
    {
      id: 5,
      name: "Plan my Trip",
      onclick: () => navigate("/plan-my-trip"),
    },
    {
      id: 6,
      name: "Packaged Details",
      onclick: () => navigate("/package-details"),
    },
  ];
  return (
    <div>
      <Header backgroundImage={""} navigationData={navItems} />
      <Service />        
      <Background/>      
      <Discovery />
      {/* <Guests /> */}
      <Explore />
      {/* <Skiplagged /> */}
 
    </div>
  );
}

export default Home;
