import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();  // Create a navigate function instance

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

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
        console.log('Sending form data:', formData);
        try {
            const { data } = await axios.post('http://localhost:3001/auth/signup', formData);
            console.log('Signup successful', data);
            
            navigate('/game');  // Redirect to the game page after successful signup
            
        } catch (error) {
            console.log('Error during signup:', error);
            if (error.response) {
                console.log('Error data:', error.response.data);
            }
        }
    };

    return (
        <div className="container">
            <h1>Signup</h1>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <div className="error">{errors.name}</div>}
            </div>
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
            <button onClick={handleSubmit}>Sign Up</button>
        </div>
    );
};

export default Signup;
