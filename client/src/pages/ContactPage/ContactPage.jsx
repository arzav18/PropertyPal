import React, { useContext } from "react";
import "./contactPage.scss";
import { AuthContext } from "../../context/AuthContext";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function ContactPage() {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    <div className="contactPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Contact Information</h1>
          <p>
            Feel free to reach out to me through any of the following methods:
          </p>
          <div className="contactDetails">
            <div className="detail">
              <FaEnvelope className="icon" />
              <strong>Email:</strong>{" "}
              <a href="mailto:your.email@example.com">arzav.jain@gmail.com</a>
            </div>
            <div className="detail">
              <FaPhone className="icon" />
              <strong>Phone:</strong>{" "}
              <a href="tel:+11234567890">+91 844XXXXXX0</a>
            </div>
            <div className="detail">
              <FaLinkedin className="icon" />
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/arzav18/
              </a>
            </div>
            <div className="detail">
              <FaMapMarkerAlt className="icon" />
              <strong>Address:</strong> Gali No 4, Chinchpokli Nagar, Khaogali,
              Mumbai, Maharashtra, 400011
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/contact.png" alt="Contact Us" />
      </div>
    </div>
  );
}

export default ContactPage;
