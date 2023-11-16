import { Button } from "@mui/material";
import "./index.scss";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="img">
        <Button>
          <NavLink to="/">
            <img src={logo} alt="Logo" />
          </NavLink>
        </Button>
      </div>
      <div className="routes">
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
