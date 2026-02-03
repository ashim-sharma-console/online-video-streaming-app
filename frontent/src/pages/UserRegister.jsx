import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/variables.css'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {

  const navigate=useNavigate();
  //..........
  const handelSubmit = async (e) => {
    e.preventDefault();
    const fullName=e.target.fullName.value;
    const email=e.target.email.value;
    const password=e.target.password.value; 

    const response = await axios.post('http://localhost:3000/api/auth/user/register', {
      fullName:formData.fullName,
      email: formData.email,
      password: formData.password
    },{
      withCredentials: true
    })
    console.log(response.data)
    navigate('/');
  }
  //..........

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-header">
          <div className="auth-logo">🍕 Zomato</div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Sign up to order delicious food</p>
        </div>

        <form noValidate onSubmit={handelSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Enter Your Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Create a Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/user/login" className="auth-footer-link">Sign In</Link>
        </div>

        <div className="auth-footer" style={{ marginTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-lg)' }}>
          Are you a restaurant? <Link to="/food-partner/register" className="auth-footer-link">Partner with us</Link>
        </div>
      </div>
    </div>
  )
}

export default UserRegister
