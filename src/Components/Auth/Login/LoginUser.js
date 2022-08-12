import React from "react";
import { Link } from "react-router-dom";

const LoginUser = () => (
      <div className="login-page"> 
		<div class="login-box">

  <div class="card card-outline card-primary">
    <div class="card-header text-center">
      <a href="#" class="h2"><b>Samurai</b>&nbsp;Golf&nbsp;Tours</a>
    </div>
    <div class="card-body">
      <p class="login-box-msg">Login to start your session</p>

      <form action="#" method="post">
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember" />
              <label for="remember">
                Remember Me
              </label>
            </div>
          </div>
    
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">LogIn</button>
          </div>
        
        </div>
      </form>

      <div class="social-auth-links text-center mt-2 mb-3">
	  	<p>- OR -</p>
        <a href="#" class="btn btn-block btn-primary">
          <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
        </a>
        <a href="#" class="btn btn-block btn-danger">
          <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
        </a>
      </div>


      <p class="mb-1">
        <Link to='/forgetpass'>I forgot my password</Link>
      </p>
      <p class="mb-0">
      
        <Link to='/userregister' className="text-center">Register a new membership</Link>

      </p>
    </div>

  </div>

</div>
	  </div>
)

export default LoginUser