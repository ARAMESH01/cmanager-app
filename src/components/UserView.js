import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

class UserView extends Component {
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
      reEnterPassword: ""
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
      .then(function(response) {
        console.log(response);
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
    const currentUser = this.props.currentUser;
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
                <div className="col-md-10 text-left">
                  <input
                    type="text"
                    className="form-control"
                    id="user-id"
                    placeholder="User Id"
                    name="userId"
                    value={currentUser.USER_ID}
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
                <div className="col-md-10 text-left">
                  <input
                    type="text"
                    className="form-control"
                    id="code"
                    placeholder="Code"
                    name="userCode"
                    value={currentUser.USER_CD}
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
                <div className="col-md-10 text-left">
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder="First Name"
                    name="firstName"
                    value={currentUser.USER_FIRST_NM}
                    disabled
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
                <div className="col-md-10 text-left">
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Last Name"
                    name="lastName"
                    value={currentUser.USER_LAST_NM}
                    disabled
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
                <div className="col-md-10 text-left">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="sample@email.com"
                    name="email"
                    value={currentUser.USER_EMAIL}
                    disabled
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
                <div className="col-md-10 text-left">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="000-000-0000"
                    name="phone"
                    value={currentUser.USER_PHONE}
                    disabled
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
                <div className="col-md-10 text-left">
                  <input
                    type="text"
                    className="form-control"
                    id="role"
                    name="role"
                    value={currentUser.USER_ROLE}
                    disabled
                  />
                  {/* <select id="role" name="role" className="form-control" value={currentUser.USER_ROLE}>
                    <option value=""></option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                  </select> */}
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="password"
                  className="col-md-2 col-form-label text-right"
                >
                  Password
                </label>
                <div className="col-md-10 text-left">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    name="password"
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="re-enter-password"
                  className="col-md-2 col-form-label text-right"
                >
                  Re-enter Password
                </label>
                <div className="col-md-10 text-left">
                  <input
                    type="password"
                    className="form-control"
                    id="re-enter-password"
                    placeholder="re-Enter-Password"
                    name="reEnterPassword"
                    disabled
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12 text-left">
                  <button
                    type="button"
                    className="mr-3 btn btn-outline-primary mr-2"
                  >
                    <Link to="/password">Change Password</Link>
                  </button>
                  <Link
                    type="button"
                    className="mr-3 btn btn-outline-danger "
                    onClick={this.onDelete}
                    to="/"
                  >
                    Delete User
                  </Link>
                  <Link
                    type="button"
                    className="mr-3 btn btn-outline-info"
                    onClick={this.state.user}
                    to="/"
                  >
                    User List
                    {/* <a href="/user">User List</a> */}
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

export default connect(mapStateToProps)(UserView);
