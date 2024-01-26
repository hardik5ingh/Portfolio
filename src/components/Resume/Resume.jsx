import { Link } from "react-router-dom";
import styles from "./Resume.module.css";
import { ResumeDetails } from "./Resume";
export default function Resume() {
  return (
    <>
      <main className={styles.resume}>
        <div
          className={`${styles.heading} d-flex justify-content-center align-items-center gap-3 fs-1 fw-bold`}
        >
          <div className={`${styles.box}`}></div> Resume
        </div>

        <div className="d-flex justify-content-center align-items-center pt-4 pb-2">
          <button className={`${styles.button} fw-bold fs-5`}>
            <Link
              to="https://drive.google.com/file/d/19HLycOrLH1fNbk4D0a0Xmh2BLpi9uuke/view?usp=drive_link"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <span className={styles.buttonContent}>View Full Resume</span>
            </Link>
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center ">
          <div
            className={`${styles.Card} card  w-75 mt-4 py-4  px-lg-5 px-sm-3 px-1`}
            data-aos="fade-up"
          >
            <h1 className="card-header fs-2">Technical Skills</h1> <hr />
            <div className={`${styles.cardBody} card-body `}>
              {ResumeDetails.Skills.map((myskills) => {
                return (
                  <div
                    key={myskills.id}
                    className="py-3 px-lg-5 px-sm-3 px-2 fs-4"
                  >
                    <div className="d-flex align-items-center gap-3 ">
                      <div className={`${styles.box}`}></div>
                      <div>{myskills.skill_name}</div>
                    </div>
                  </div>
                );
              }).reverse()}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <div
            className={`${styles.Card} card w-75 mt-5 py-4  px-lg-5 px-sm-3 px-1`}
            data-aos="fade-up"
          >
            <h1 className="card-header fs-2">Education</h1> <hr />
            <div className={`${styles.cardBody} card-body `}>
              {ResumeDetails.Education.map((myEdu) => {
                return (
                  <div
                    key={myEdu.id}
                    className="py-3 px-lg-5 px-sm-3 px-2 fs-4"
                  >
                    <div className="d-flex align-items-center gap-3 ">
                      <div className={`${styles.box}`}></div>
                      <div>{myEdu.year}</div>
                    </div>
                    <div>{myEdu.inst_name}</div>
                    <div>{myEdu.course}</div>
                  </div>
                );
              }).reverse()}
            </div>
          </div>
        </div>

        <div className=" fs d-flex justify-content-center align-items-center">
          <div
            className={`${styles.Card} card  w-75 mt-5 py-4 px-lg-5 px-sm-3 px-1 `}
            data-aos="fade-up"
          >
            <h1 className="card-header fs-2">Languages</h1> <hr />
            <div className={`${styles.cardBody} card-body`}>
              {ResumeDetails.Languages.map((mylang) => {
                return (
                  <div
                    key={mylang.id}
                    className="d-flex align-items-center gap-3 py-3 px-lg-5 px-sm-3 px-2  fs-4"
                  >
                    <div className={`${styles.box}`}></div>
                    <div>{mylang.lang_name}</div>
                  </div>
                );
              }).reverse()}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
