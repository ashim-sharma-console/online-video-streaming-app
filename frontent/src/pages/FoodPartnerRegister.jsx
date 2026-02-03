import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/variables.css'
import '../styles/auth.css'
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {
  //navigate hook
  const navigate=useNavigate(); 
  //..........
  const handelSubmit = async (e) => {
    e.preventDefault();
    const fullName=e.target.fullName.value;
    const contactName=e.target.contactName.value;
    const email=e.target.email.value;
    const phone=e.target.phone.value;
    const password=e.target.password.value;
    const address=e.target.address.value; 

    const response = await axios.post('http://localhost:3000/api/auth/food-partner/register', { 
      fullName:formData.fullName,
      contactName:formData.contactName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      address: formData.address
    },{
      withCredentials: true
    })
    console.log(response.data)
    navigate('/create-food');
  }
  //..........

  const [formData, setFormData] = useState({
    fullName: '',
    contactName: '',
    email: '',
    phone: '',
    password: '',
    address: ''
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
          <h1 className="auth-title">Partner With Us</h1>
          <p className="auth-subtitle">Register your restaurant and grow your business</p>
        </div>

        <form noValidate onSubmit={handelSubmit}>
          <div className="form-group">
            <label className="form-label">Restaurant Name</label>
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Your Restaurant Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Owner Name</label>
            <input
              type="text"
              name="contactName"
              className="form-input"
              placeholder="Contact Name"
              value={formData.contactName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="you@restaurant.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Address</label>
            <input
              type="text"
              name="address"
              className="form-input"
              placeholder="Restaurant Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Create Restaurant Account
          </button>
        </form>

        <div className="auth-footer">
          Already have an account? <Link to="/food-partner/login" className="auth-footer-link">Sign In</Link>
        </div>

        <div className="auth-footer" style={{ marginTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-lg)' }}>
          Looking to order food? <Link to="/user/register" className="auth-footer-link">Create User Account</Link>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
