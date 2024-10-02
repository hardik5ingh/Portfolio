import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <main
        className={`${styles.contact} d-flex flex-column justify-content-center align-items-center`}>
        <div className={`${styles.heading} pb-5 d-flex flex-column justify-content-center align-items-center gap-4 fw-bold`} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
          <h1>LET'S TALK</h1>
          <span></span>
          <p className="fs-4 px-5">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
        </div>
        <div className="container d-flex justify-content-center px-5 px-md-0">
          <div className={`${styles.formContainer}`} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <form
              className={styles.form}
              action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfQOgue7aPUBlqS3JzT4K0pNzlRMlQFN-yF7rZdlLAWT4dYTQ/formResponse"
              method="POST"
              target="_blank"
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Name*</label>
                <input type="text" name="entry.1763577147" id="name" required />
                <label htmlFor="email">Email*</label>
                <input
                  required
                  name="entry.1449707071"
                  id="email"
                  type="email"
                />
                <label htmlFor="subject">Subject</label>
                <input type="text" name="entry.914395922" id="subject" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="textarea">Message</label>
                <textarea
                  cols="50"
                  rows="10"
                  id="textarea"
                  name="entry.1920558757"
                />
              </div>
              <div className="submitbtn d-flex justify-content-center align-items-center">
                {/* <button
                  type="submit"
                  className={`${styles.button} fw-bold fs-5`}
                >
                  <span className={styles.buttonContent}>Submit</span>
                </button> */}
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
