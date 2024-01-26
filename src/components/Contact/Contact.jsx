import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <>
      <main
        className={`${styles.contact} d-flex flex-column justify-content-center align-items-center`}
      >
        <p
          className={`${styles.heading} d-flex justify-content-center align-items-center gap-3 fs-1 fw-bold`}
        >
          <span className={`${styles.box}`}></span> Let's Talk
        </p>
        <div className="container d-flex justify-content-center px-5 px-md-0">
          <div className={`${styles.formContainer}`} data-aos="fade-up">
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
              <div className="d-flex justify-content-center align-items-center">
                <button
                  type="submit"
                  className={`${styles.button} fw-bold fs-5`}
                >
                  <span className={styles.buttonContent}>Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
