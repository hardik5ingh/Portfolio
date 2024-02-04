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
            className={`${styles.Card} card w-75 mt-4 py-4  px-lg-5 px-sm-3 px-1`}
            data-aos="fade-up"
          >
            <h1 className="card-header fs-2">Technical Skills</h1> <hr />
            <div
              className={`${styles.cardBody} card-body d-flex gap-5 flex-wrap justify-content-center align-items-center p-0`}
            >
              {ResumeDetails.Skills.map((myskills) => {
                return (
                  <div className={styles.tooltipContainer} key={myskills.id}>
                    <span className={styles.tooltip}>{myskills.skill_name}</span>
                    <span>
                      <img src={myskills.skill_img} alt={myskills.skill_name} />
                    </span>
                  </div>
                );
              }).reverse()
              }
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
            <h1 className="card-header fs-2">Certifications</h1> <hr />
            <div className={`${styles.cardBody} card-body`}>
              {ResumeDetails.Certification.map((mycert) => {
                return (
                  <div
                    key={mycert.id}
                    className="d-flex align-items-center gap-3 py-3 px-lg-5 fs-4"
                  >
                    <div className={`${styles.box}`}></div>
                    
                    <Link to={mycert.cert_link} target="_blank" rel="noreferrer" className={`${styles.Cert}`} style={{textDecoration:"none"}}>
                       <div className="d-flex justify-content-center align-items-center gap-2">{mycert.cert_name} 
                       <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" className={styles.extLink}/></svg></div> 
                    </Link>
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
