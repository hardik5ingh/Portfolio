import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import { ProjectList } from "../../data/Project";
import { ProjectCategory } from "../../data/Project";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
Aos.init();
export default function Projects() {
  const [categoryType, setCategoryType] = useState("All");
  const [skeleton, setSkeleton] = useState(true);
  const [image, setImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
      setImage(true);
    }, 1200);
  }, []);

  return (
    <main className={styles.project}>
      <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
        <div className={`${styles.heading} d-flex flex-column justify-content-center align-items-center gap-4 fs-1 fw-bold`}>
          <h1>PROJECTS</h1>
          <span></span>
        </div>

        <div className="d-flex justify-content-center gap-lg-5 gap-sm-3 gap-2 py-5">
          {ProjectCategory.map((my_category) => {
            return (
              <div key={my_category.value} className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check bo" name="btnradio" id={my_category.value} autoComplete="off" />
                <label onClick={() => setCategoryType(my_category.label)} className={`${styles.my_categoryBtn} btn  btn-outline-light`} htmlFor={my_category.value}>{my_category.label}</label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className={`${styles.row} row`}>
          {ProjectList.map((list) => {

            return (
              (list.category === categoryType || categoryType === "All") && (
                <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500" className="col col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center align-content-center mt-5" key={list.id}>
                  <div className={`${styles.cardddd} bg-transparent h-100 card rounded-4 h-100 overflow-hidden`} style={{ width: "80%" }}>
                    {
                      image && <img src={list.img} className="object-fit-cover w-100" alt={list.name} />
                    }

                    {
                      skeleton && <div className={`${styles.card2}`}>
                        <div className={`${styles.bgNeutral} ${styles.w56} ${styles.h64} ${styles.animatePulse} ${styles.rounded} ${styles.flex} ${styles.flexCol} card2`}></div>
                      </div>
                    }
                    <div className="card-body d-flex flex-column justify-content-evenly bg-light">
                      <p className="card-text fs-4 fw-semibold m-0">{list.name}</p>
                      <p className="card-text fs-6 fw-medium m-0 text-body-secondary">{list.techUse}</p>
                      <div className="d-flex gap-2 fs-5 fw-medium">
                        <Link to={list.url} className="text-decoration-none">Live link</Link>|
                        <Link to={list.sourceCode} className="text-decoration-none">Source code</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          }).reverse()}
        </div>
      </div>
    </main>
  );
}
