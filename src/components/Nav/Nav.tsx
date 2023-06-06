import { Button } from "@mui/material";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <div className="img">
        <img />
      </div>
      <div className="routes">
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
