import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Axios } from '../../../Utils/Axios'

const RegisterUser = () => {
  const navigate = useNavigate()
  const [registerDetails, setregisterDetails] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (registerDetails.password !== registerDetails.confirmPassword)
      return alert('Passwords dont match')

    Axios.post(
      '/user/register',
      {
        username: registerDetails.username,
        email: registerDetails.email,
        phone: registerDetails.phone,
        password: registerDetails.password,
        confirmPassword: registerDetails.confirmPassword,
      },
      {
        header: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        navigate('/userLogin')
      })
      .catch((error) => {
        console.log(error)
        alert(error.response.data.error)
        // window.alert('Registration Failed ')
      })
  }
  return (
    <>
      <div className="register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="#" className="h2">
                <b>Samurai</b>&nbsp;Golf&nbsp;Tours
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>

              <form action="#" method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    onChange={(e) =>
                      setregisterDetails({
                        ...registerDetails,
                        username: e.target.value,
                      })
                    }
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) =>
                      setregisterDetails({
                        ...registerDetails,
                        email: e.target.value,
                      })
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
                    type="number"
                    className="form-control"
                    placeholder="Phone"
                    onChange={(e) =>
                      setregisterDetails({
                        ...registerDetails,
                        phone: e.target.value,
                      })
                    }
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) =>
                      setregisterDetails({
                        ...registerDetails,
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
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                    onChange={(e) =>
                      setregisterDetails({
                        ...registerDetails,
                        confirmPassword: e.target.value,
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
                        id="agreeTerms"
                        name="terms"
                        value="agree"
                      />
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>

                  <div className="col-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="btn btn-primary btn-block"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i>
                  Sign up using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i>
                  Sign up using Google+
                </a>
              </div>

              <a href="/" className="text-center">
                I already have a membership
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterUser
