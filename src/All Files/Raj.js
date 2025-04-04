import React from 'react'

const Raj = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto d-flex gap-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-light" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  RNS
                </a>
                <ul className="dropdown-menu bg-dark text-primary">
                  <li><a className="dropdown-item text-light" href="/">Softwere Developer</a></li>
                  <li><a className="dropdown-item text-light" href="/">Data Secince</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item text-light" href="/">Ai / ML</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-light" href='/' aria-disabled="true">Help</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
     
    </div>

 
  )
}

export default Raj
