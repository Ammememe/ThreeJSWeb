import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  // Handle input changes in the form fields
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      emailjs.send(
        'service_beps7rc',
        'template_19wd51v',
        {
          from_name: form.name,
          to_name: 'Amir',
          from_email: form.email,
          to_email: 'amir_khatiby@hotmail.com',
          message: form.message
        },
        'nNyUFdbOHCLetzEcA'
      );
      setLoading(false);

      alert('Message sent successfully');
      setForm({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert('An error occurred, Please try again');
    }
  };

  return (
    <section id="contact" className="c-space my-20"> {/* Added id="contact" */}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminalbackground" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-lg text-white-600 mt-3">Are you looking for a Cloud Developer? Let me know!</p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="JohnDoe@hotmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="What's up?"
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>

        <h3 className="head-text">Contact Me</h3>
      </div>
    </section>
  );
};

export default Contact;
