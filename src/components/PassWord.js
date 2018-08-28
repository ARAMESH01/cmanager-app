import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

const mapStateToProps = ({ currentUser }) => ({
  currentUser
});

class PassWord extends Component {
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
      password: "",
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
    const pwd = document.getElementById("password").value;
    const rePassword = document.getElementById("re-enter-password").value;
    const messageElement = document.getElementById("message");
    // <label class="col-md-12 col-form-label text-center alert alert-danger mt-2 collapse.show" id="message">Saved Successfully!</label>
    messageElement.classList.remove("collapse.show");
    messageElement.classList.add("collapse");
    const axiosConfig = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      crossDomain: true
    };
    const putPayload = JSON.stringify(this.state);
    if (pwd === rePassword) {
      axios
        .put(
          "https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users",
          putPayload,
          axiosConfig
        )
        .then(result => {
          console.log(result);
          messageElement.innerText = "Saved Successfully!";
          messageElement.classList.remove("collapse");
          messageElement.classList.add("collapse.show");
        });
    } else {
      messageElement.innerText = "Passwords Do NOT match.";
      messageElement.classList.remove("collapse");
      messageElement.classList.add("collapse.show");
    }
  };

  render() {
    // const currentUser = this.props.currentUser;
    console.log("PassWord");
    console.dir(this.state);
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
                    value={this.state.userId}
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
                    value={this.state.userCode}
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
                    value={this.state.firstName}
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
                    value={this.state.lastName}
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
                    value={this.state.email}
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
                    value={this.state.phone}
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
                    value={this.state.role}
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
                <div className="col-md-10">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
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
                <div className="col-md-10">
                  <input
                    type="password"
                    className="form-control"
                    id="re-enter-password"
                    placeholder=""
                    name="reEnterPassword"
                    value={this.state.reEnterPassword}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12 text-left">
                  <button
                    type="submit"
                    className="mr-3 btn btn-outline-primary mr-2"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mr-3 btn btn-outline-secondary mr-2"
                  >
                    Update User
                  </button>
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

export default connect(mapStateToProps)(PassWord);
