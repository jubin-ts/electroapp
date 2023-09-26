import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Step 1: Import the useNavigate hook

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Step 2: Call the useNavigate hook

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      const { data } = await axios.post('http://localhost:3001/auth/login', formData);
      console.log('Login successful', data);

      navigate('/game'); // Step 3: Navigate to the game page

    } catch (error) {
      console.log('Error during login:', error);
      if (error.response) {
        console.log('Error data:', error.response.data);
        // You might want to handle specific error messages from the server here.
      }
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>

      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <div className="error">{errors.password}</div>}
      </div>

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
