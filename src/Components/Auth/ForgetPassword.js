import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => (
    <div className="login-page">
      <div class="login-box">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
    <a href="#" class="h2"><b>Samurai</b>&nbsp;Golf&nbsp;Tours</a>
    </div>
    <div class="card-body">
      <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
      <form action="#" method="post">
        <div class="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Request new password</button>
          </div>
     
        </div>
      </form>
      <p class="mt-3 mb-1">
        <Link to="/userlogin">Login</Link>
      </p>
    </div>
  
  </div>
</div>
      
    </div>
)

export default ForgetPassword