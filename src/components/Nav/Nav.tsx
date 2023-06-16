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
          <NavLink
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            Home
          </NavLink>
        </Button>
        <Button>
          <NavLink
            to="/about"
            style={{ color: "white", textDecoration: "none" }}
          >
            About
          </NavLink>
        </Button>
        <Button>
          <NavLink
            to="/projects"
            style={{ color: "white", textDecoration: "none" }}
          >
            Projects
          </NavLink>
        </Button>
        <Button>
          <NavLink
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

export default Nav;
