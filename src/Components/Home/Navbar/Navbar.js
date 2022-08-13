import React from 'react'
import logo from '../../../Assets/img/main/logo.svg'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const Navbar = () => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p className="mb-1">
            <a href="/registerUser" style={{ fontSize: '24px' }}>
              Register as a user
            </a>
          </p>
          <p className="mb-1">
            <a href="/registerAdmin" style={{ fontSize: '24px' }}>
              Register as a admin
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const [modalShow, setModalShow] = React.useState(false)

  return (
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
                      LogIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      id="has_bottom_border"
                      onClick={() => setModalShow(true)}
                      state={{ title: 'ホスト登録' }}
                    >
                      Register
                    </Link>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
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
}

export default Navbar
