import React, { useState } from 'react';
import Input from './Input'; // Custom component for input fields (explained later)
// import PhoneNumberInput from 'react-phone-number-input';
// import './Signup.css';
function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
  const [errors, setErrors] = useState({}); // To store validation errors

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    let error = {};
    // Name validation (replace with your desired logic)
    if (!formData.name) {
      error.name = 'Name is required';
    }
    // Phone number validation (handled by react-phone-number-input)

    // Email validation (using regular expression)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(formData.email)) {
      error.email = 'Invalid email format';
    }

    // Password validation (replace with your desired complexity requirements)
    if (formData.password.length < 8) {
      error.password = 'Password must be at least 8 characters long';
    }

    // Confirm password validation
    if (formData.confirmPassword !== formData.password) {
      error.confirmPassword = 'Passwords do not match';
    }

    // OTP validation (placeholder, replace with your logic)
    if (!formData.otp) {
      error.otp = 'OTP is required';
    }

    return error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit data (replace with your logic)
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
        {/* <PhoneNumberInput style = {{width: "30px"}}
          value={formData.phone}
          onChange={(value) => setFormData({ ...formData, phone: value })}
          placeholder="Enter phone number"
        /> */}
        <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
        <Input label="Password" name="password" type="password" value={formData.password} onChange={handleChange} error={errors.password} />
        <Input label="Re-enter Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />
        <Input label="OTP" name="otp" value={formData.otp} onChange={handleChange} error={errors.otp} />
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger" role="alert">
          {Object.values(errors).map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Signup;
