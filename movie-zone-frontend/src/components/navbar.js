import React from 'react';
import navBar from "./JSON/navbarJSON.json";
export default function Navbar() {
  const { brand, links, searchPlaceholder, offcanvasTitle } = navBar;

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000">
          {brand}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a className="nav-link active" aria-current="page" href={link.url}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder={searchPlaceholder} aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
              {searchPlaceholder}
              </button>
            </form>
            <ul className="navbar-nav me-0 mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Account(User Name #)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" data-bs-theme="dark">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              {offcanvasTitle}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <p>Profile</p>
            <a href='http://localhost:3000/login'>Log Out</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
