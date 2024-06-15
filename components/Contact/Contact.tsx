import React, { useState } from 'react';

const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     TODO: Implement form submission logic
//     This is where you would send the form data to your backend
//     or use a third-party service like Mailchimp to send an email

//     console.log('Form submitted with data:', {
//       name,
//       email,
//       subject,
//       message,
//     });

//     // Reset form fields after submission
//     setName('');
//     setEmail('');
//     setSubject('');
//     setMessage('');
//   };

  return (
    <div className="container">
      <h2 className="title">Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            // value={subject}
            // onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;