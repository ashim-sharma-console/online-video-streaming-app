import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/variables.css'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FoodPartnerLogin = () => {

//navigate hook
const navigate=useNavigate();   
//..........
const handelSubmit = async (e) => {
  e.preventDefault();
  const email=e.target.email.value;
  const password=e.target.password.value; 

  const response = await axios.post('http://localhost:3000/api/auth/food-partner/login', {
    email: formData.email,
    password: formData.password 
  },{
    withCredentials: true
  })
  console.log(response.data)
  navigate('/create-food');
}
//..........    


  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
          <h1 className="auth-title">Restaurant Login</h1>
          <p className="auth-subtitle">Sign in to your restaurant dashboard</p>
        </div>

        <form noValidate onSubmit={handelSubmit}>
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

          <div className="form-group">
            <Link to="#" className="form-link">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>

        <div className="form-divider">
          <div className="form-divider-line"></div>
          <div className="form-divider-text">OR</div>
          <div className="form-divider-line"></div>
        </div>

        <button type="button" className="btn btn-secondary">
          📞 Call Our Support Team
        </button>

        <div className="auth-footer">
          Don't have an account? <Link to="/food-partner/register" className="auth-footer-link">Register Now</Link>
        </div>

        <div className="auth-footer" style={{ marginTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-lg)' }}>
          Looking to order food? <Link to="/user/login" className="auth-footer-link">Sign In as User</Link>
        </div>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
