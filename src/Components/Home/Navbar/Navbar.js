import React from "react";

const Navbar = () => (
    <>
      <header id="header" className="fixed-top">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10 d-flex align-items-center">
            <h1 className="logo mr-auto"> </h1>
            <nav className="nav-menu d-lg-block">
              <ul>
                <li>
                  {/* <a id="has_bottom_border" href="/signin">
                      ゲスト登録
                    </a> */}
                  {/* <Link id="has_bottom_border" to="/signin"> */}
                  <Link id="has_bottom_border" to="/userLogin">
                    ゲスト登録
                  </Link>
                </li>
                <li>
                  <Link id="has_bottom_border" to="/login" state={{ title: 'ホスト登録' }}>
                    ホスト登録
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="logo-container">
        <a href="/home">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </header>
      
    </>
)

export default Navbar