import React from 'react'

const Navigation = () => (
  <nav className="navbar navbar-expand-md bg-light sticky-top col-md-12">
    <a className="navbar-brand" href="http://localhost:3000">
      <i>
        <img src="quadyster-logo.png" alt="image" className="quadyster-logo" />
      </i>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item text-center mb-1 mt-1">
          <a className="nav-link" href="/">
            <i className="fa fa-home fa-2x blue-font "></i>
            <br/>
            <i className="nav-text">Home</i>
          </a>
        </li>
        <li className="nav-item text-center mb-1 mt-1">
          <a className="nav-link" href="/user">
            <i className="fa fa-user fa-2x red-font"></i>
            <br/>
            <i className="nav-text">Users</i>
          </a>
        </li>
        <li className="nav-item text-center mb-1 mt-1">
          <a className="nav-link" href="#">
            <i className="fa fa-globe fa-2x DimGray-font gray-center"></i>
            <br/>
            <i className="nav-text">Portals</i>
          </a>
        </li>
        <li className="nav-item text-center mb-1 mt-1">
          <a className="nav-link" href="#">
            <i className="fa fa-tasks fa-2x DarkCyan-font"></i>
            <br/>
            <i className="nav-text">Opportunities</i>
          </a>
        </li>
        <li className="nav-item text-center mb-1 mt-1">
          <a className="nav-link" href="#">
            <i className="fa fa-bullseye fa-2x DarkCyan-font"></i>
            <br/>
            <i className="nav-text">New Opportunity</i>
          </a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0 text-center mb-1 mt-1">
        <a>
          <img src="girl.png" alt="Avatar" className="avatar" />
          <br/>
          <i>User Name</i>
        </a>
      </form>
    </div>
  </nav>
)

export default Navigation;