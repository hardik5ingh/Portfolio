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
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="17.5" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" className="NavMenuBtn" /></svg>
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

        <label for="theme" class="theme">
          <span class="theme__toggle-wrap">
            <input id="theme" class="theme__toggle" type="checkbox" onChange={onChangeBtn}
              checked={themeMode === "light"} role="switch" name="theme" value="dark" />
            <span class="theme__icon">
              <span class="theme__icon-part"></span>
              <span class="theme__icon-part"></span>
              <span class="theme__icon-part"></span>
              <span class="theme__icon-part"></span>
              <span class="theme__icon-part"></span>
              <span class="theme__icon-part"></span>
              <span class="theme__icon-part"></span>
              <span class="theme__icon-part"></span>
              <span class="theme__icon-part"></span>
            </span>
          </span>
        </label>
      </div>
    </nav>
  );
}
