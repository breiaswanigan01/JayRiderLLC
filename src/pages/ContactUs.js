import React, { useState } from "react";
import { db } from "../firebase"; // Import your Firebase configuration
import { collection, addDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
        <h1 className="pb-4 font-extrabold text-4xl lg:text-5xl border-b-4 border-blue-900 inline-block">
          Contact Us
        </h1>
      </div>

      <div className="bg-white p-5 rounded-3xl m-6 lg:m-12">
        <p>
          Please fill out the form and you will be contacted within 24 hours.
        </p>

        <div className="m-8 text-lg  rounded-3xl p-5 lg:flex lg:justify-center">
          <form onSubmit={handleSubmit} className=" ">
            <div className="lg:mr-12">
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="firstName"
                  className="block  text-blue-900 mb-4"
                >
                  First Name<span className="text-red-500 pl-1">*</span>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className=" p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-full "
                  />
                </label>
                <label htmlFor="lastName" className="block  text-blue-900 mb-4">
                  Last Name<span className="text-red-500 pl-1">*</span>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-full   "
                  />
                </label>
                <label htmlFor="email" className="block text-blue-900  mb-4">
                  Email<span className="text-red-500 pl-1">*</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className=" p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-full "
                  />
                </label>
                <label
                  htmlFor="phoneNumber"
                  className="block text-blue-900 mb-4"
                >
                  Phone Number:
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className=" p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-full "
                  />
                </label>
                <label htmlFor="location" className="block text-blue-900">
                  Location:
                  <input
                    type="text "
                    id="location"
                    placeholder="Location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className=" p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-full "
                  />
                </label>
              </div>
              <div className="col-span-1">
                <label htmlFor="message" className="block  text-blue-900">
                  Message:
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className=" p-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500 w-full h-20  "
                  />
                </label>
                <button
                  type="submit"
                  className="text-white p-1 bg-blue-900 hover:bg-blue-700 rounded-3xl  w-full focus:outline-none mt-3"
                >
                  Submit
                </button>
                <div>
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                  {errors.firstName && (
                    <p className="text-red-500">{errors.firstName}</p>
                  )}
                  {errors.lastName && (
                    <p className="text-red-500">{errors.lastName}</p>
                  )}
                  {/* Add similar error messages for other required fields */}
                </div>
              </div>
            </div>
          </form>

          <div className="  grid mt-10 lg:ml-12">
            <div className="flex  border-b-2 mb-4">
              {/* <div className=" flex "> */}
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "white" }}
                className="  ml-1 items-center bg-blue-900 rounded-full p-3  "
              />
              <div className="pl-5">
                <p className="text-gray-500 text-md">Address</p>
                <p className="text-xl  mb-4">
                  2785 E. Grand Blvd, Detroit, MI 48211, USA
                </p>
              </div>
              {/* </div> */}
            </div>
            <div className="flex border-b-2 mb-4">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ color: "white" }}
                className="  ml-1 items-center bg-blue-900 rounded-full p-3 "
              />
              <div className="pl-5">
                <p className="text-gray-500 text-md">Phone</p>
                <p className="text-xl  mb-4">(248) 862-0663</p>
              </div>
            </div>
            <div className=" flex ">
              <a
                className="text-xl"
                href="mailto:jayriderllc@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "white" }}
                  className=" ml-1 items-center bg-blue-900 rounded-full p-3"
                />
              </a>
              <div className="pl-5">
                <p className="text-gray-500 text-md">Email</p>
                <a
                  className="text-xl"
                  href="mailto:jayriderllc@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Email Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div> */}
      <p className="py-10 text-center">
        <span className="text-black">
          Would you like to sell your equipment?
        </span>{" "}
        <Link to="/sellProducts" className="text-gray-400">
          Click Here
        </Link>
      </p>
      {/* </div> */}
    </>
  );
};

export default ContactUs;
