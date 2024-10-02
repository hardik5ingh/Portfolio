import { useState } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import useTheme from "../../contexts/MyThemeContext";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const navigate = useNavigate()
  const location = useLocation()
  const isActive = {
    "home": location.pathname === "/",
    "about": location.pathname === "/about",
    "projects": location.pathname === "/projects",
    "contact": location.pathname === "/contact"
  }


  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChangeBtn = (e) => {
    const btnStatus = e.currentTarget.checked;
    if (btnStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };


  return (
    <nav className="navbar fixed-top navbar-expand-lg pt-5 ">
      <div className="container">
        <button
          onClick={() =>
            setOpenSidebar(true)
          }
          className="navbar-toggler shadow-none border-0 fs-3 "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_03"> <path className="NavMenuBtn" id="Vector" d="M5 17H13M5 12H19M5 7H13"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
          </span>
        </button>
        <div
          className={`offcanvas offcanvas-start  ${openSidebar ? "" : "sidebar"
            } w-75`}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header px-5 py-5">
            <button
              type="button"
              className="border-0 bg-transparent"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ><span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" className="NavMenuBtn" /></svg>
              </span>
            </button>
          </div>

          <div className="offcanvas-body ">
            <ul className="navbar-nav   flex-grow-1 d-flex gap-5 fs-3 px-lg-0 px-5">
              <li className="nav-item">
                <button onClick={() => { navigate("/"); setOpenSidebar(false) }} className={isActive.home ? "nav-active" : "navNormal"} data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button onClick={() => { navigate("/about"); setOpenSidebar(false) }} className={isActive.about ? "nav-active" : "navNormal"} data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  About
                </button>
              </li>

              <li className="nav-item">
                <button onClick={() => { navigate("/projects"); setOpenSidebar(false) }} className={isActive.projects ? "nav-active" : "navNormal"} data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  Project
                </button>
              </li>

              <li className="nav-item">
                <button onClick={() => { navigate("/contact"); setOpenSidebar(false) }} className={isActive.contact ? "nav-active" : "navNormal"} data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  Let's Talk
                </button>
              </li>
            </ul>
          </div>
        </div>

        <label htmlFor="theme" className="theme">
          <span className="theme__toggle-wrap">
            <input id="theme" className="theme__toggle" type="checkbox" onChange={onChangeBtn}
              checked={themeMode === "light"} role="switch" name="theme" value="dark" />
            <span className="theme__icon">
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
              <span className="theme__icon-part"></span>
            </span>
          </span>
        </label>
      </div>
    </nav>
  );
}
