import React, { useState } from 'react';
// import '../AddDetailsForm.css'; // Import the CSS file
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AddDetailsForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    surname: '',
    phone: '',
    gender: '',
    residence: '',
    id_number: '',
    department: '',
    qualification: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      setSuccess(true);
      setFormData({
        // Reset form after successful submission
        first_name: "",
        last_name: "",
        surname: "",
        phone: "",
        gender: "",
        residence: "",
        id_number: "",
        department: "",
        qualification: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (

    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
    <div className="form-container">
      <h2>Add Personal Details</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && (
        <p style={{ color: "green" }}>Employee added successfully!</p>
      )}

      
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter First Name"
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </div>

        <div className="form-group">
          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Enter Surname"
          />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Residence:</label>
          <input
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleChange}
            placeholder="Enter Residence"
          />
        </div>

        <div className="form-group">
          <label>ID Number:</label>
          <input
            type="text"
            name="id_number"
            value={formData.id_number}
            onChange={handleChange}
            placeholder="Enter ID Number"
          />
        </div>

        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter Department"
          />
        </div>

        <div className="form-group">
          <label>Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Enter Qualification"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>

    </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default AddDetailsForm;
