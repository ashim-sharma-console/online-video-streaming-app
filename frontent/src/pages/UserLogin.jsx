import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/variables.css'
import '../styles/auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
const UserLogin = () => {

  //navigate hook
  const navigate=useNavigate(); 
  //..........
  const handelSubmit = async (e) => {
    e.preventDefault();
    const email=e.target.email.value;
    const password=e.target.password.value; 

    const response = await axios.post('http://localhost:3000/api/auth/user/login', {
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
    email: '',
    password: '',
    rememberMe: false
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
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>
        </div>

        <form noValidate onSubmit={handelSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="you@example.com"
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

          <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label className="form-checkbox" style={{ margin: 0 }}>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <span>Remember me</span>
            </label>
            <Link to="#" className="form-link" style={{ fontSize: '13px' }}>Forgot Password?</Link>
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
          📱 Sign in with Mobile
        </button>

        <div className="auth-footer">
          Don't have an account? <Link to="/user/register" className="auth-footer-link">Sign Up</Link>
        </div>

        <div className="auth-footer" style={{ marginTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-color)', paddingTop: 'var(--spacing-lg)' }}>
          Are you a restaurant? <Link to="/food-partner/register" className="auth-footer-link">Partner with us</Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
