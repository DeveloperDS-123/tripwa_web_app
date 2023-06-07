import Background from "./Header/Background";
import Service from "./Header/Service";
import Discovery from "./Header/Discovery";
import Explore from "./Header/Explore";
import Skiplagged from "./Header/Skiplagged";
import Guests from "./Header/Guests";
import HeaderNavBar from "./Header/HeaderNavBar";

function Home() {
  return (
    <div>
      <HeaderNavBar/>
      <Background/>
      <Service />
      <Discovery />
      {/* <Guests /> */}
      <Explore />
      {/* <Skiplagged /> */}
    </div>
  );
}

export default Home;
