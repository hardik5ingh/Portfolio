import { aboutme, myskills } from "../../data/About"
import styles from "./About.module.css"
import { Link } from "react-router-dom"
export default function About() {
    return (
        <main className={`${styles.about}`} >
            <div className={`${styles.aboutHeading} d-flex flex-column justify-content-center align-items-center gap-4`} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
                <h1>ABOUT ME</h1>
                <span></span>
                <p className="fs-4 fw-medium px-5">Here you will find more information about me, what I do, and my current skills.</p>
            </div>

            <div className="container mt-5 py-5">
                <div className="row gx-lg-4 gy-5 justify-content-around">
                    <div className={`${styles.aboutMe} col-lg-5 col-12 px-5`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <p className="fs-3 fw-bold">I'm a Front-end Developer</p>
                        {
                            aboutme.map((about, id) => {
                                return <p key={id} className="fs-4 fw-medium lh-lg">{about}</p>
                            })
                        }
                        <button className="mt-5"> <Link className="text-decoration-none fw-medium" to="/contact">Contact</Link></button>
                    </div>


                    <div className={`${styles.mySkills} col-lg-5 col-12`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
                        <h1 className="mb-5 fs-2 d-flex justify-content-sm-start justify-content-center align-items-center">My Skills</h1>
                        <div className={`${styles.skillsBtn} d-flex flex-wrap gap-4 justify-content-sm-start justify-content-center align-items-center`}>
                            {
                                myskills.map((skill, id) => {
                                    return <button className={`${styles.skillBtn}`} key={id}>{skill}</button>
                                })
                            }
                        </div>
                        <div className="d-flex justify-content-sm-start justify-content-center align-items-center">
                            <button className={`${styles.cta} mt-5 border-0 bg-transparent `}>
                                <span className={`${styles.hoverAnimation} pb-3 fs-4 fw-medium pe-3 position-relative`}> <Link target="_blank" to="https://drive.google.com/file/d/19HLycOrLH1fNbk4D0a0Xmh2BLpi9uuke/view?usp=sharing" className="text-decoration-none">RESUME</Link> </span>
                                <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                                </svg>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}