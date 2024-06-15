import React, { useState } from 'react';
import SectionHeading from '../section-heading';
import styles from "./contact.module.css"

const Contact = () => {

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1>Akeshya</h1>
        <p>Designers, developers & marketeers capable of delivering solutions according to your needs,</p>
        <div className={styles.contactDetails}>
          <span>📍 26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004</span>
          <span>📧 info@akeshya.com</span>
          <span>📞 +91 94942 40922</span>
        </div>
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;