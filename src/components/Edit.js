import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.us";

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

class Edit extends Component {
  constructor(props) {
    super(props);
    let user = props.currentUser;
    this.state = {
      userId: user.USER_ID,
      userCode: user.USER_CD,
      firstName: user.USER_FIRST_NM,
      lastName: user.USER_LAST_NM,
      email: user.USER_EMAIL,
      phone: user.USER_PHONE,
      role: user.USER_ROLE,
      password: user.USER_PW,
      reEnterPassword: "",
      updated: false
    };
  }

  handleInputChange = event => {
    let tempState = {};
    tempState[event.target.name] = event.target.value;
    this.setState(tempState);
  };

  onSubmit = event => {
    event.preventDefault();
    const postPayload = JSON.stringify(this.state);
    const axiosConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      crossDomain: true
    };
    const messageElement = document.getElementById("message");
    messageElement.classList.remove("collapse.show");
    messageElement.classList.add("collapse");
    axios
      .put(
        "https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users",
        postPayload,
        axiosConfig
      )
      .then(response => {
        console.log(response);
        this.setState(() => ({ updated: true }));
        messageElement.innerText = "Updated Successfully!";
        messageElement.classList.remove("collapse");
        messageElement.classList.add("collapse.show");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onDelete = event => {
    console.log("onDelete");
    console.dir(this.state);
    const axiosConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      data: { userId: this.state.userId },
      crossDomain: true
    };
    const messageElement = document.getElementById("message");
    messageElement.classList.remove("collapse.show");
    messageElement.classList.add("collapse");
    axios
      .delete(
        "https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users",
        axiosConfig
      )
      .then(function(response) {
        console.log(response);
        messageElement.innerText = "Deleted Successfully!";
        messageElement.classList.remove("collapse");
        messageElement.classList.add("collapse.show");
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    if (this.state.updated === true) {
      return <Redirect to="/view" />;
    }

    return (
      <div>
        <div className="row">
          <div className="col" />
          <div className="col-8">
            <form onSubmit={this.onSubmit}>
              <div className="form-group row">
                <label
                  className="col-md-12 col-form-label text-center alert alert-danger collapse mt-2"
                  id="message"
                />
              </div>
              <div className="form-group row">
                <label
                  htmlFor="user-id"
                  className="col-md-2 col-form-label text-right"
                >
                  User Id
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="user-id"
                    placeholder="User Id"
                    name="userId"
                    value={this.state.userId}
                    onChange={this.handleInputChange}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="code"
                  className="col-md-2 col-form-label text-right"
                >
                  Code
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="code"
                    placeholder="Code"
                    name="userCode"
                    value={this.state.userCode}
                    onChange={this.handleInputChange}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="first-name"
                  className="col-md-2 col-form-label text-right"
                >
                  First Name
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="last-name"
                  className="col-md-2 col-form-label text-right"
                >
                  Last Name
                </label>
                <div className="col-md-10">
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="email"
                  className="col-md-2 col-form-label text-right"
                >
                  Email
                </label>
                <div className="col-md-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="sample@email.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="phone"
                  className="col-md-2 col-form-label text-right"
                >
                  Phone
                </label>
                <div className="col-md-10">
                  {/* <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="000-000-0000"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  /> */}
                  <Cleave
                    placeholder="xxx xxx xxxx"
                    className="form-control"
                    id="phone"
                    name="phone"
                    options={{ phone: true, phoneRegionCode: "US" }}
                    onChange={this.onPhoneChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="role"
                  className="col-md-2 col-form-label text-right"
                >
                  Role
                </label>
                <div className="col-md-10">
                  <select
                    id="role"
                    name="role"
                    className="form-control"
                    value={this.state.role}
                    onChange={this.handleInputChange}
                  >
                    <option value="" />
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="User">User</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="password"
                  className="col-md-2 col-form-label text-right"
                >
                  Password
                </label>
                <div className="col-md-10">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="re-enter-password"
                  className="col-md-2 col-form-label text-right"
                  disabled
                >
                  Re-enter Password
                </label>
                <div className="col-md-10">
                  <input
                    type="password"
                    className="form-control"
                    id="re-enter-password"
                    placeholder=""
                    name="reEnterPassword"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12 text-center">
                  <a
                    className="mr-3 btn btn-outline-primary"
                    onClick={this.onSubmit}
                    href="/view"
                    // to="/view"
                  >
                    Save
                  </a>
                  <button
                    type="button"
                    className="mr-3 btn btn-outline-secondary"
                  >
                    <Link to="/password">Change Password</Link>
                  </button>
                  <Link
                    type="button"
                    className="mr-3 btn btn-outline-danger"
                    onClick={this.onDelete}
                    to="/"
                  >
                    Delete User
                  </Link>
                  <Link
                    type="button"
                    className="mr-3 btn btn-outline-info"
                    to="/"
                  >
                    User List
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Edit);
