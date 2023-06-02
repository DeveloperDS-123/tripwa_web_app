import { Link, useNavigate } from "react-router-dom";
import "../Styles/Header.css";
import Logo from "../../../Images/Tripwa.svg";

const HeaderNavBar = () => {
  const navigate = useNavigate();
  const navItems = [
    {
      id: 1,
      name: "Flights",
      onclick: () => navigate("/flights"),
    },
    { id: 2, name: "Stays", onclick: () => navigate("/stays") },
    { id: 3, name: "Cars", onclick: () => navigate("/cars") },
    { id: 4, name: "Visit", onclick: () => navigate("/visit") },
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
    <div className="Header">
      <div className=" container">
        <div className="row">
          <Link to={{ pathname: `/` }}>
            <div>
              <img id="logo" src={Logo} alt="Tripwa" />
            </div>
          </Link>
          <div className="menu_list">
            {navItems.map((item) => {
              const { name, id, onclick } = item;
              return (
                <p style={{color:"black"}} key={id} onClick={onclick}>
                  {name}
                </p>
              );
            })}
          </div>
          <div className="button_group">
            <p>Login</p>
            <p>sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderNavBar;
