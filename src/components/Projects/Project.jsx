import styles from "./Project.module.css";
import { Link } from "react-router-dom";
import { ProjectList } from "./Project";
import { ProjectCategory } from "./Project";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
Aos.init();
export default function Projects() {
  const [categoryType, setCategoryType] = useState("All");
  const [skeleton, setSkeleton] = useState(true);
  const [image, setImage] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setSkeleton(false);
      setImage(true);
    }, 1200);
  }, []);

  return (
    <>
      <main className={styles.project}>
        <p
          className={`${styles.heading} d-flex justify-content-center align-items-center gap-3 fs-1 fw-bold`}
        >
          <span className={`${styles.box}`}></span> Projects{" "}
        </p>

        <div className="d-flex justify-content-center gap-lg-5 gap-sm-3 gap-2 py-5">
          {ProjectCategory.map((my_category, key) => {
            return (
              <button
                className={`${styles.button} fw-bold d-flex justify-content-center align-items-center`}
                key={key}
                onClick={() => setCategoryType(my_category)}
              >
                <span className={styles.buttonContent}>{my_category}</span>
              </button>
            );
          })}
        </div>

        <div className="container">
          <div className="row">
            {ProjectList.map((list) => {
            
              return (
                (list.category === categoryType || categoryType === "All") && (
                  <div
                    className="col col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center align-content-center mt-5"
                    key={list.id}
                  >
                    <Link to={list.url} target="_blank" key={list.id}>
                      <div className={styles.card} data-aos="fade-up">
                        <div className={styles.card2}>
                          
                          {
                            image && (
                              <img src={list.img} alt="project-image"  />
                            )
                          }
                         
                          {
                            skeleton && (
                            <div className={styles.card} data-aos="fade-up" >
                            <div className={styles.card2}>
                              <div
                                class={`${styles.bgNeutral} ${styles.w56} ${styles.h64} ${styles.animatePulse} ${styles.rounded} ${styles.flex} ${styles.flexCol}`}
                              ></div>
                              <span className={`${styles.cardName}`}></span>
                            </div>
                          </div>
                            )
                          }
                            
                          <span className={`${styles.cardName}`}>
                            {list.name}
                          </span>
                        </div>
                        <button className={styles.cardButton}>
                          <Link
                            to={list.sourceCode}
                            target="_blank"
                            className="text-light fw-bold"
                            style={{ textDecoration: "none" }}
                          >
                            Source Code
                          </Link>
                        </button>
                      </div>
                    </Link>
                  </div>
                )
              );

              
            }).reverse()}
          </div>
        </div>
      </main>
    </>
  );
}
