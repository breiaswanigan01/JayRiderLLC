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
      <div className="m-8 text-xl bg-yellow-200 rounded-3xl p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block">
                First Name:
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="m-2 p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 w-full"
                />
              </label>
              <label className="block">
                Last Name:
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="m-2 p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 w-full"
                />
              </label>
              <label className="block">
                Email:
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="m-2 p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 w-full"
                />
              </label>
              <label className="block">
                Phone Number:
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="m-2 p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 w-full"
                />
              </label>
              <label className="block">
                Location:
                <input
                  type="text"
                  placeholder="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="m-2 p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 w-full"
                />
              </label>
            </div>
            <div className="col-span-1">
              <label className="block">
                Message:
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="m-2 p-2 rounded border border-gray-400 focus:outline-none focus:border-blue-500 w-full h-32"
                />
              </label>
              <button
                type="submit"
                className="text-white p-2 bg-blue-900 hover:bg-blue-700 rounded-3xl w-full focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
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
