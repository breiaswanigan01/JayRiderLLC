import React, { useState } from "react";
import { db } from "../firebase"; // Import your Firebase configuration
import { collection, addDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation - Check if fields are empty
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    }
    if (Object.keys(newErrors).length === 0) {
      try {
        // Submit the form data to Firestore
        await addDoc(collection(db, "contactSubmits"), formData);
        console.log("Form data submitted to Firestore:", formData);

        // Clear the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          location: "",
          message: "",
        });

        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      // Update errors state with validation errors
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="text-center mb-12">
        <h1 className="pb-4 font-extrabold text-4xl border-b-4 border-blue-900 inline-block">
          Contact Us
        </h1>
      </div>
      <div className=" m-8 text-xl bg-yellow-200  rounded-3xl p-5 ">
        <form onSubmit={handleSubmit}>
          <label className="text">
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="m-2"
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="m-2"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="m-2"
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="m-2"
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="m-2"
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="m-2"
            />
          </label>
          <br />
          <button
            type="submit"
            className="text-white p-1 m-2 bg-blue-900 hover:bg-blue-700 rounded-3xl w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="text-4xl grid">
        <div className="flex ">
          <FontAwesomeIcon icon={faLocationDot} style={{ color: "#1e3a8a" }} />
          <p>2785 E. Grand Blvd, Detroit, MI 48211</p>
        </div>
        <div className="flex">
          <FontAwesomeIcon icon={faPhone} style={{ color: "1e3a8a" }} />
          <p>(248) 862-0663</p>
        </div>
        <div className="flex">
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "1e3a8a" }} />

       <a href="mailto:jayriderllc@gmail.com" target="_blank" rel="noopener noreferrer"> Email Us </a>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
