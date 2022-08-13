import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from '../../../Utils/Axios'

const LoginAdmin = () => {
  const navigate = useNavigate()

  const [loginDetails, setloginDetails] = useState({
    email: '',
    password: '',
    remember: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (loginDetails.email.length === 0 && !loginDetails.password) {
      return alert('Email and password are required')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="#" className="h2">
              <b>Samurai</b>&nbsp;Golf&nbsp;Tours
            </a>
          </div>
          <div className="card-body">
            <p className="login-box-msg">Login to start your session</p>

            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) =>
                    setloginDetails({ ...loginDetails, email: e.target.value })
                  }
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) =>
                    setloginDetails({
                      ...loginDetails,
                      password: e.target.value,
                    })
                  }
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="remember"
                      onChange={(e) =>
                        setloginDetails({
                          ...loginDetails,
                          remember: e.target.checked,
                        })
                      }
                    />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>

                <div className="col-4">
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary btn-block"
                  >
                    LogIn
                  </button>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mt-2 mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using
                Google+
              </a>
            </div>

            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>

            <p className="mb-1">
              <a href="/registerAdmin" className="text-center">
                Register as a admin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAdmin
