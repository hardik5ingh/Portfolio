import { useState } from 'react'
import styles from "./Contact.module.css";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Submitting");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setForm({ name: "", email: "", subject: "", message: "" });
        setStatus("Submitted");
        setTimeout(() => setStatus(""), 1000);
      } else {
        setStatus(data.error);
      }
    } catch {
      setStatus("Failed");
    }
  }
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
              onSubmit={handleSubmit}
            >
              <div className={styles.formGroup}>
                <label htmlFor="name">Name*</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
                <label htmlFor="email">Email*</label>
                <input
                  required name="email" value={form.email} onChange={handleChange} type="email"
                />
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="textarea">Message</label>
                <textarea
                  cols="50"
                  rows="10"
                  name="message" value={form.message} onChange={handleChange}
                />
              </div>
              <div className="submitbtn d-flex justify-content-center align-items-center">
                <button disabled={status === "Submitting" || status === "Submitted"}>{status === "Submitting" ? "Submitting..." : status === "Submitted" ? "Submitted" : "Submit"}</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
