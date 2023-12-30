import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const getContactPage = async () => {
    try {
      const res = await fetch("https://basic-mern-server.onrender.com/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactPage();
  }, []);

  const handleInputs = async (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const contactForm = async (e) => {
    try {
      e.preventDefault();
      const { name, email, phone, message } = userData;
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });
      const data = await res.json();
      if (!data) {
        console.log("message not send");
      } else {
        alert("Message Send");
        setUserData({ ...userData, message: "" });
      }
    } catch (error) {
      window.alert("Please login to contact");
    }
  };

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">+91 1111 543 2198</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">
                    mail.nikhil0008@gmail.com
                  </div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt=""
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Aligarh, UP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact_form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">Get in Touch</div>
                <form id="contact_form" method="POST">
                  <div className="contact_form_name d-flex justify-content-between">
                    <input
                      type="text"
                      name="name"
                      id="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="Enter your name"
                      value={userData.name}
                      onChange={handleInputs}
                    />
                    <input
                      type="email"
                      name="email"
                      id="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="Enter your email"
                      value={userData.email}
                      onChange={handleInputs}
                    />
                    <input
                      type="number"
                      name="phone"
                      id="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="Enter your phone No."
                      value={userData.phone}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <textarea
                      style={{ resize: "none" }}
                      name="message"
                      className="text_field contact_form_message"
                      placeholder="Enter Message"
                      value={userData.message}
                      onChange={handleInputs}
                      cols="30"
                      rows="10"></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                      onClick={contactForm}>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
