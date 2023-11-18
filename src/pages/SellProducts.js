import React, { useState, useRef } from "react";
import { db } from "../firebase"; // Import your Firebase configuration
import { collection, addDoc } from "firebase/firestore";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SellProducts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    location: "",
    productName: "",
    manufacturer: "",
    model: "",
    condition: "",
    attachments: [],
    comments: "",
  });
  const fileInputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles([...selectedFiles, ...files]);
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
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
        await addDoc(collection(db, "sellEquipmentForm"), formData);
        console.log("Form data submitted to Firestore:", formData);

        // Clear the form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          companyName: "",
          location: "",
          productName: "",
          manufacturer: "",
          model: "",
          condition: "",
          comments: "",
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
        <h1 className="pb-4 font-extrabold text-center text-4xl lg:text-5xl border-b-4 border-blue-900  inline-block">
          Sell Your Equipment
        </h1>
      </div>
      <div className="mx-auto max-w-xl lg:max-w-5xl text-lg bg-white p-6 rounded-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div className=""> */}
          <div className="md:flex md:flex-wrap md:-mx-2">
            <div className="md:w-1/2 md:px-2 mb-4">
              {/* first name */}
              <label htmlFor="firstName" className="text-blue-900">
                First Name <span className="text-red-500 pl-1">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:w-1/2 md:px-2 mb-4">
              {/* last name */}
              <label htmlFor="lastName" className="text-blue-900">
                Last Name <span className="text-red-500 pl-1">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            {/* email */}
            <label htmlFor="email" className="text-blue-900">
              Email <span className="text-red-500 pl-1">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            {/* number */}
            <label htmlFor="number" className="text-blue-900">
              Number
            </label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="md:flex md:flex-wrap md:-mx-2">
            <div className="md:w-1/2 md:px-2 mb-4">
              {/* company name */}
              <label htmlFor="companyName" className="text-blue-900">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:w-1/2 md:px-2 mb-4">
              {/* location */}
              <label htmlFor="location" className="text-blue-900">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            {/* product name */}
            <label htmlFor="productName" className=" md:mr-1 text-blue-900">
              Product Name <span className="text-red-500 pl-1">*</span>
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              required
              value={formData.productName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full  focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="md:flex md:flex-wrap md:-mx-2">
            <div className="md:w-1/2 md:px-2 mb-4">
              {/* manufacturer */}
              <label htmlFor="manufacturer" className="text-blue-900">
                Manufacturer <span className="text-red-500 pl-1">*</span>
              </label>
              <input
                type="text"
                id="manufacturer"
                name="manufacturer"
                required
                value={formData.manufacturer}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="md:w-1/2 md:px-2 mb-4">
              {/* model */}
              <label htmlFor="model" className="text-blue-900">
                Model <span className="text-red-500 pl-1">*</span>
              </label>
              <input
                type="text"
                id="model"
                name="model"
                required
                value={formData.model}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <label htmlFor="condition" className="text-blue-900">
            Condition <span className="text-red-500 pl-1">*</span>
          </label>
          <select
            id="condition"
            name="condition"
            required
            value={formData.condition}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
          >
            <option value="">Select Condition</option>
            <option value="New">New</option>
            <option value="lightlyUsed">Lightly Used</option>
            <option value="moderatelyUsed">Moderately Used</option>
            <option value="heavilyUsed">Used</option>
            <option value="non-FunctionalParts">
              Non-Functional (parts only)
            </option>
            {/* Add more options as needed */}
          </select>

          {/* </div> */}

          <div>
            <label htmlFor="comments" className="text-blue-900">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
            ></textarea>
            {/* </div> */}
          </div>
          {/* attach files */}
          <div>
            <button
              type="button"
              onClick={handleButtonClick}
              className="bg-blue-900 text-white py-1 px-4 rounded-xl hover:bg-blue-600 focus:outline-none"
            >
              Attach Files
            </button>
            <span className="text-red-500 pl-1">*</span>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              multiple // multiple files
              onChange={handleFileChange}
              required
            />
            {/* Display selected files (optional) */}
            {selectedFiles.length > 0 && (
              <div className="mt-2 ">
                <p>Selected Files:</p>

                <ul className="">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{file.name}</span>
                      <button
                        className="ml-2 text-red-500"
                        onClick={() => {
                          const updatedFiles = [...selectedFiles];
                          updatedFiles.splice(index, 1);
                          setSelectedFiles(updatedFiles);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-900 text-white w-full py-2 px-4 rounded-3xl hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SellProducts;
