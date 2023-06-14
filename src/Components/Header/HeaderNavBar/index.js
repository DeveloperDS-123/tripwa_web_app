import { Link, useNavigate } from "react-router-dom";
import "../Styles/Header.css";
import Logo from "../../../Images/Tripwa.svg";
import { useEffect, useState } from "react";

const HeaderNavBar = () => {
  const navigate = useNavigate();
  const navItems = [
    {
      id: 1,
      name: "Home",
      onclick: () => navigate("/"),
    },
    { id: 2, name: "About Us", onclick: () => navigate("/About-us") },
    { id: 3, name: "Things to Do", onclick: () => navigate("/things-to-do") },
    {
      id: 4,
      name: "Places to Visit",
      onclick: () => navigate("/places-to-visit"),
    },
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
  const [sticky, setSticky] = useState("");

  useEffect(() => {window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 420 ? "fixed" : "";
    setSticky(stickyClass);
  };
  return (
    <div className={`Header ${sticky}`}>
      <div className=" container">
        <div className="row">
          <Link to={{ pathname: `/` }}>
            <div className="logo_wrap">
              <img id="logo" src={Logo} alt="Tripwa" />
            </div>
          </Link>
          <div className="menu_list">
            {navItems.map((item) => {
              const { name, id, onclick } = item;
              return (
                <p key={id} onClick={onclick}>
                  {name}
                </p>
              );
            })}
          </div>
          <div className="button_group">
            <p onClick={() => { navigate("/login"); }}>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderNavBar;