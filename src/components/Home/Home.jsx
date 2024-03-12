import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

export default function About() {
  return (
      <main className={`${styles.main} pt-5 px-5`} >
        <div data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="500" className="d-flex flex-column gap-5 justify-content-center align-items-center">
          <h1>HEY, I'M HARDIK SINGH</h1>
          <p>A Result-oriented Web Developer</p>
          <button class={`${styles.cta} border-0 bg-transparent `}>
            <span class={`${styles.hoverAnimation} pb-3 fs-4 fw-medium pe-3 position-relative`}> <Link to="https://hartan.netlify.app/" target="_blank" className="text-decoration-none">Hartan.js</Link> </span>
            <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
              <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
            </svg>
          </button>
          <button className={`${styles.projectBtn}`}> <Link className="text-decoration-none fw-medium" to="/projects">Projects</Link></button>
        </div>
      </main>
  );
}
