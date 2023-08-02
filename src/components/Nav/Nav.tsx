import { Button } from "@mui/material";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

function Nav() {
  return (
    <div className="Nav">
      <div className="img">
        <img src={logo} alt="Logo" />
      </div>
      <div className="routes">
        <Button>
          <NavLink to="/">Home</NavLink>
        </Button>
        <Button>
          <NavLink to="/about">About</NavLink>
        </Button>
        <Button>
          <NavLink to="/projects">Projects</NavLink>
        </Button>
        <Button>
          <NavLink to="/contact">Contact</NavLink>
        </Button>
      </div>
    </div>
  );
}

export default Nav;
