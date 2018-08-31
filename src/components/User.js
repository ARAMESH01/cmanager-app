import React, { Component } from "react";
import axios from "axios";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.us";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      userCode: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      reEnterPassword: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onPhoneChange = event => {
    this.setState({ phone: event.target.rawValue });
  };

  onSubmit = event => {
    event.preventDefault();
    // get our form data out of state
    const {
      userId,
      userCode,
      firstName,
      lastName,
      email,
      phone,
      role,
      password
    } = this.state;
    const pwd = document.getElementById("password").value;
    const rePassword = document.getElementById("re-enter-password").value;
    const messageElement = document.getElementById("message");
    // <label class="col-md-12 col-form-label text-center alert alert-danger mt-2 collapse.show" id="message">Saved Successfully!</label>
    messageElement.classList.remove("collapse.show");
    messageElement.classList.add("collapse");
    let messages = [];
    if (pwd !== rePassword) {
      messages.push("Passwords Do NOT match.");
    }
    if (this.state.userId === null || this.state.userId === "") {
      messages.push("Please enter UserId.");
    }
    if (this.state.userCode === null || this.state.userCode === "") {
      messages.push("Please enter UserCode.");
    }
    if (this.state.userId === null || this.state.userId === "") {
      messages.push("Please enter firstName.");
    }
    if (this.state.userId === null || this.state.userId === "") {
      messages.push("Please enter lastName.");
    }
    if (this.state.userId === null || this.state.userId === "") {
      messages.push("Please enter email.");
    }
    if (this.state.userId === null || this.state.userId === "") {
      messages.push("Please enter phone.");
    }
    if (this.state.userId === null || this.state.userId === "") {
      messages.push("Please enter role.");
    }
    if (this.state.userId === null || this.state.userId === "") {
      messages.push("Please enter password.");
    }
    if (this.state.userId === null || this.state.userId === "") {
      messages.push("Please enter reEnterPassword.");
    }

    if (
      this.state.reEnterPassword === null ||
      this.state.reEnterPassword === ""
    ) {
      messages.push("Please enter firstName.");
    }

    if (
      this.state.reEnterPassword === null ||
      this.state.reEnterPassword === ""
    ) {
      messages.push("Please enter lastName.");
    }

    if (
      this.state.reEnterPassword === null ||
      this.state.reEnterPassword === ""
    ) {
      messages.push("Please enter email.");
    }

    if (
      this.state.reEnterPassword === null ||
      this.state.reEnterPassword === ""
    ) {
      messages.push("Please enter phone.");
    }

    if (
      this.state.reEnterPassword === null ||
      this.state.reEnterPassword === ""
    ) {
      messages.push("Please enter role.");
    }

    if (
      this.state.reEnterPassword === null ||
      this.state.reEnterPassword === ""
    ) {
      messages.push("Please enter password.");
    }

    if (
      this.state.reEnterPassword === null ||
      this.state.reEnterPassword === ""
    ) {
      messages.push("Please enter reEnterPassword.");
    }

    console.log("messages: " + messages);
    console.dir(messages);
    if (messages === [] || messages.length === 0) {
      const axiosConfig = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        data: { userId: this.state.userId },
        crossDomain: true
      };
      console.log("before axios");

      // axios.post('https://c7kfbjspdb.execute-api.us-east-1.amazonaws.com/dev/users', { userId, userCode, firstName, lastName, email, phone })
      axios
        .post(
          "https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users",
          {
            userId,
            userCode,
            firstName,
            lastName,
            email,
            phone,
            role,
            password
          },
          axiosConfig
        )
        .then(result => {
          console.log(result);
          messageElement.innerText = "Saved Successfully!";
          messageElement.classList.remove("collapse");
          messageElement.classList.add("collapse.show");
        });
    } else {
      let messagesHtml = messages.map(message => {
        return "<p>" + message + "</p>";
      });
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      messageElement.innerHTML = messagesHtml.reduce(reducer, "");
      messageElement.classList.remove("collapse");
      messageElement.classList.add("collapse.show");
    }
  };

  render() {
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
                  className="col-md-2 col-form-label text-right input-medium bfh-phone"
                  data-format="(ddd) ddd-dddd"
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
                <div className="col-md-12 text-center">
                  <button
                    type="submit"
                    className="mr-3 btn btn-outline-primary"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mr-3 btn btn-outline-secondary"
                  >
                    Change Password
                  </button>
                  <button type="button" className="mr-3 btn btn-outline-danger">
                    Delete User
                  </button>
                  <button type="button" className="mr-3 btn btn-outline-info">
                    User List
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

export default User;
