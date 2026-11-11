import { useState } from 'react'

const DEMO_EMAIL = 'admin@example.com'
const DEMO_PASSWORD = 'admin123'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState({})
  const [authError, setAuthError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newErrors = {}
    if (email.trim() === '') {
      newErrors.email = 'Please enter your email address.'
    }
    if (password === '') {
      newErrors.password = 'Please enter your password.'
    }
    setErrors(newErrors)
    setAuthError('')
    if (Object.keys(newErrors).length > 0) {
      return
    }
    const isValidUser =
      email.trim().toLowerCase() === DEMO_EMAIL && password === DEMO_PASSWORD
    if (isValidUser) {
      onLogin()
    } else {
      setAuthError('Invalid email or password. Please try again.')
    }
  }

  return (
    <main className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100 g-0">
          <div className="col-12 col-md-11 col-lg-9 col-xl-8">
            <div className="login-card card">
              <div className="row g-0 h-100">
                <div className="col-md-5 d-none d-md-block">
                  <div className="login-brand-panel">
                    <div className="login-brand-header">
                      <span className="brand-mark">
                        <i className="bi bi-people-fill"></i>
                      </span>
                      <div>
                        <h2 className="login-brand-title">NexaHR</h2>
                        <p className="login-brand-tagline">Employee Management</p>
                      </div>
                    </div>
                    <h3 className="login-brand-heading">
                      Manage your team with confidence
                    </h3>
                    <p className="login-brand-subtitle">
                      Track employees, departments and workforce insights from a
                      single clean dashboard.
                    </p>
                    <ul className="login-features">
                      <li>
                        <i className="bi bi-people"></i>
                        Live employee directory
                      </li>
                      <li>
                        <i className="bi bi-diagram-3"></i>
                        Department organization
                      </li>
                      <li>
                        <i className="bi bi-graph-up-arrow"></i>
                        Workforce statistics
                      </li>
                      <li>
                        <i className="bi bi-shield-check"></i>
                        Secure admin access
                      </li>
                    </ul>
                    <div className="login-brand-stats">
                      <div>
                        <span className="login-brand-stat-value">150+</span>
                        <span className="login-brand-stat-label">
                          Team members
                        </span>
                      </div>
                      <div>
                        <span className="login-brand-stat-value">8</span>
                        <span className="login-brand-stat-label">
                          Departments
                        </span>
                      </div>
                      <div>
                        <span className="login-brand-stat-value">24/7</span>
                        <span className="login-brand-stat-label">
                          Availability
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="login-form-panel">
                    <div className="login-mobile-brand d-md-none">
                      <span className="brand-mark">
                        <i className="bi bi-people-fill"></i>
                      </span>
                      <span className="login-mobile-brand-name">NexaHR</span>
                    </div>
                    <h1 className="login-title">Welcome back</h1>
                    <p className="login-subtitle">
                      Sign in to your account to continue
                    </p>

                    {authError ? (
                      <div className="alert alert-danger auth-alert" role="alert">
                        <i className="bi bi-exclamation-triangle-fill"></i>
                        {authError}
                      </div>
                    ) : null}

                    <form className="login-form" onSubmit={handleSubmit} noValidate>
                      <div>
                        <label htmlFor="loginEmail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="loginEmail"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="admin@example.com"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          autoComplete="email"
                        />
                        {errors.email ? (
                          <div className="invalid-feedback">{errors.email}</div>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="loginPassword" className="form-label">
                          Password
                        </label>
                        <div className="password-wrapper">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="loginPassword"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            autoComplete="current-password"
                          />
                          <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                          </button>
                        </div>
                        {errors.password ? (
                          <div className="invalid-feedback">{errors.password}</div>
                        ) : null}
                      </div>

                      <div className="login-meta-row">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(event) => setRememberMe(event.target.checked)}
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <a
                          className="forgot-link"
                          href="#"
                          onClick={(event) => event.preventDefault()}
                        >
                          Forgot password?
                        </a>
                      </div>

                      <button type="submit" className="btn btn-primary btn-auth">
                        Sign in
                        <i className="bi bi-box-arrow-in-right"></i>
                      </button>
                    </form>

                    <div className="demo-hint">
                      <i className="bi bi-info-circle-fill"></i>
                      <div>
                        <strong>Demo credentials</strong>
                        <br />
                        Email: <code>admin@example.com</code>
                        <br />
                        Password: <code>admin123</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
