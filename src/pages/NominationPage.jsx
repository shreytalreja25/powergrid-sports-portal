import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NominationPage = () => {
  const [formData, setFormData] = useState({
    employeeNumber: "",
    name: "",
    location: "",
    region: "NR-1",
    gender: "Male",
    dob: "",
    mobile: "",
    email: "",
    reportingOfficer: "",
    sport: "Cricket",
  });

  // Handles form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validates the form
  const validateForm = () => {
    if (!/^\d{8}$/.test(formData.employeeNumber)) {
      toast.error("Employee Number must be 8 digits.");
      return false;
    }
    if (!/^\d{8}$/.test(formData.reportingOfficer)) {
      toast.error("Reporting Officer Employee Number must be 8 digits.");
      return false;
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      toast.error("Mobile Number must be 10 digits.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submission
    if (!validateForm()) return;

    // Simulated backend submission
    console.log("Form Submitted: ", formData);

    // Display success toast notification
    toast.success("Nomination Submitted Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Reset form after successful submission
    setFormData({
      employeeNumber: "",
      name: "",
      location: "",
      region: "NR-1",
      gender: "Male",
      dob: "",
      mobile: "",
      email: "",
      reportingOfficer: "",
      sport: "Cricket",
    });
  };

  return (
    <div className="container pt-5">
      {/* Toast Notifications */}
      <ToastContainer />
      <h1 className="text-center mb-4">Nominate for Sports Events</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="employeeNumber" className="form-label">
            Employee Number
          </label>
          <input
            type="text"
            className="form-control"
            id="employeeNumber"
            name="employeeNumber"
            placeholder="Enter your 8-digit employee number"
            value={formData.employeeNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="region" className="form-label">
            Region
          </label>
          <select
            className="form-select"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          >
            <option value="NR-1">NR-1</option>
            <option value="NR-2">NR-2</option>
            <option value="CC">CC</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            placeholder="Enter your location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Enter your 10-digit mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            PG Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your PG email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reportingOfficer" className="form-label">
            Reporting Officer Employee Number
          </label>
          <input
            type="text"
            className="form-control"
            id="reportingOfficer"
            name="reportingOfficer"
            placeholder="Enter the 8-digit employee number of your reporting officer"
            value={formData.reportingOfficer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sport" className="form-label">
            Sport
          </label>
          <select
            className="form-select"
            id="sport"
            name="sport"
            value={formData.sport}
            onChange={handleChange}
            required
          >
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Badminton">Badminton</option>
          </select>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NominationPage;
