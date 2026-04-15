/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import { Header } from '../Layout/style';
import Link from '../ActiveLink';
import AppContext from '../Utils/context';

/* ---------------------------- Image Dependency ---------------------------- */
import { Logo, Moon, Icon } from '../Icons';

const Navbar = () => {
  const { show, handleopen, setTheme, closeShow, theme } = useContext(
    AppContext
  );

  return (
    <>
      <Header>
        <div className="nav-container">
          <Link
            href="/"
            className="navbar-brand-external"
            aria-label="Umer Sacirovic Home"
            tabIndex={show ? -1 : undefined}
          >
            <Logo />
          </Link>

          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler pr-0"
              type="button"
              onClick={handleopen}
              tabIndex={show ? -1 : undefined}
              aria-label="Open Button Toggle"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className={`collapse navbar-collapse  ${show && 'show'}`}
              id="collapsibleNavbar"
            >
              <button
                className="d-block d-md-none close-nav"
                onClick={handleopen}
                type="button"
              >
                <Icon />
              </button>

              <ul className="navbar-nav">
                <li className="nav-item d-block d-md-none">
                  <Link
                    href="/"
                    activeClassName="is-active"
                    className="nav-link"
                    onClick={closeShow}
                    aria-label="Go Home"
                    title="Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/about"
                    activeClassName="is-active"
                    className="nav-link"
                    onClick={closeShow}
                    aria-label="Go To About Page"
                    title="About"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/projects"
                    activeClassName="is-active"
                    className="nav-link"
                    onClick={closeShow}
                    aria-label="Go To Projects Page"
                    title="Projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/contact"
                    activeClassName="is-active"
                    className="nav-link"
                    onClick={closeShow}
                    aria-label="Go To Contacts Page"
                    title="Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Link
            href="#!"
            className="nav-link-external nav-svg"
            aria-label={`Turn On ${theme === false ? 'Light' : 'Dark'} Mood`}
            onClick={setTheme}
          >
            <Moon />
          </Link>
        </div>
      </Header>
    </>
  );
};

export default Navbar;