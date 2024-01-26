import { useState } from "react";
import "./Navbar.css";
import {  useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useTheme from "../../contexts/MyThemeContext";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const navigate=useNavigate()
  const location=useLocation()
  const isActive={
    "about":location.pathname==="/",
    "resume":location.pathname==="/resume",
    "projects":location.pathname==="/projects",
    "contact":location.pathname==="/contact"
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
    <>
      <nav className="navbar fixed-top navbar-expand-lg  p-3 ">
        <div className="container">
          <button
            onClick={()=>
              setOpenSidebar(true)
            }
            className="navbar-toggler shadow-none border-0 fs-3 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bs">
              
            </span>
          </button>
          <Link to="https://hardiksingh-hsm.netlify.app/" target="_blank">
            <div className="pic">
              <img src="/My_pic.jpg" alt="" />
            </div>
          </Link>

          <div
            className={`offcanvas offcanvas-start w-50 ${
              openSidebar ? "" : "sidebar"
            } `}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header px-5 py-5">
              <button
                type="button"
                className="btn-close btn-close-white shadow-none fs-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-center flex-grow-1 d-flex gap-5 fs-3 px-5">
                <li className="nav-item">
                  <button onClick={()=>{navigate("/") ; setOpenSidebar(false)}}  className={isActive.about ? "nav-active":"navNormal"} data-bs-dismiss="offcanvas"
                aria-label="Close">
                    About
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick={()=>{navigate("/resume") ; setOpenSidebar(false)}}  className={isActive.resume ? "nav-active":"navNormal"} data-bs-dismiss="offcanvas"
                aria-label="Close">
                    Resume
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick={()=>{navigate("/projects") ; setOpenSidebar(false)}}  className={isActive.projects ? "nav-active":"navNormal"} data-bs-dismiss="offcanvas"
                aria-label="Close">
                    Project
                  </button>
                </li>
                <li className="nav-item">
                  <button onClick={()=>{navigate("/contact") ; setOpenSidebar(false)}}  className={isActive.contact ? "nav-active":"navNormal"} data-bs-dismiss="offcanvas"
                aria-label="Close">
                    Let's Talk
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              onChange={onChangeBtn}
              checked={themeMode === "light"}
            />
            <span className="slider"></span>
          </label>
        </div>
      </nav>  
    </>
  );
}
