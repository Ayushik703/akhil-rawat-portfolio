import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Navbar } from "../components/Navbar";
import "./contact.css";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_fwjb4cs", "template_t5c6kfm", form, {
        publicKey: "NHh_UKO8Z95Pi_jod",
      })
      .then(() => {
        alert("Message sent successfully");
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="contact">
      <Navbar />

      <div className="container">
        <div className="contact-container">
          <div className="contact-left">
            <h1>
              Got A Project Or <br /> A Partnership In Mind?
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              corporis eaque impedit enim velit a quasi fuga nam, voluptatem
              odio rerum laudantium voluptate perferendis, perspiciatis deleniti
              nisi, non cum consectetur. Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>

            <div className="contact-details">
              <div className="span-div">
                <p>Phone:</p>
                <a href="tel:+918475965849">+91 8475965849</a>
              </div>
              <div className="span-div">
                <p>Email:</p>
                <a href="mailto:akhilrwt49@gmail.com">akhilrwt49@gmail.com</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
