import React from "react";

const RecoverPassword = () => (
    <div className="login-page">
      <div class="login-box">
  <div class="card card-outline card-primary">
    <div class="card-header text-center">
    <a href="#" class="h2"><b>Samurai</b>&nbsp;Golf&nbsp;Tours</a>
    </div>
    <div class="card-body">
      <p class="login-box-msg">You are only one step a way from your new password, recover your password now.</p>
      <form action="#" method="post">
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="Confirm Password" />
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <button type="submit" class="btn btn-primary btn-block">Change password</button>
          </div>
  
        </div>
      </form>

      <p class="mt-3 mb-1">
        <a href="/">Login</a>
      </p>
    </div>
  
  </div>
</div>
      
    </div>
)

export default RecoverPassword