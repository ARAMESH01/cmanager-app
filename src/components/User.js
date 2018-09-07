import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { editUser } from "../actions";
import { put, post, getInitialState } from "../services/user-api";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.us";
import queryString from "query-string";

const mapStateToProps = ({ currentUser, isEdit, editCredentials }) => ({
  currentUser,
  isEdit,
  editCredentials
});

const mapDispatchToProps = dispatch => ({
  onPasswordChange: x => dispatch({ type: "credentials_edit", payload: x }),
  onSaveEdit: y => dispatch({ type: "user_edit", payload: y }),
  onNewUserSave: (user, isEdit, editCredentials) => {
    dispatch(editUser(user));
    dispatch({ type: "user_edit", payload: isEdit });
    dispatch({ type: "credentials_edit", payload: editCredentials });
  },
  onUserDelete: userId => dispatch({ type: "delete_user", payload: userId })
});

class User extends Component {
  constructor(props) {
    super(props);
    const user = props.currentUser;
    this.state = {
      userId: user.USER_ID,
      userCode: user.USER_CD,
      firstName: user.USER_FIRST_NM,
      lastName: user.USER_LAST_NM,
      email: user.USER_EMAIL,
      phone: user.USER_PHONE,
      role: user.USER_ROLE,
      password: user.USER_PW,
      reEnterPassword: user.USER_PW
    };
  }

  componentDidMount() {
    let { userIdParam } = this.props.match.params;
    userIdParam = parseInt(userIdParam);
    console.log(`componentDidMount userId: ${userIdParam}`);
    console.dir(this.state);
    const urlParams = queryString.parse(this.props.location.search);
    console.log("urlParams:");
    console.dir(urlParams);
    if (!this.state.userCode && userIdParam) {
      console.log("Empty State");
      getInitialState().then(initialState => {
        console.log("initialState");
        console.dir(initialState);
        const { users } = initialState;
        console.log("users");
        console.dir(users);
        console.log(`userIdParam: ${userIdParam}`);
        let currentUser = users.find(u => u.USER_ID === userIdParam);
        console.dir(currentUser);
        this.setState({
          userId: currentUser.USER_ID,
          userCode: currentUser.USER_CD,
          firstName: currentUser.USER_FIRST_NM,
          lastName: currentUser.USER_LAST_NM,
          email: currentUser.USER_EMAIL,
          phone: currentUser.USER_PHONE,
          role: currentUser.USER_ROLE,
          password: currentUser.USER_PW,
          reEnterPassword: currentUser.USER_PW
        });
        console.dir(this.state);
      });
    }
  }

  onChangePassword = () => {
    this.props.onPasswordChange(true);
    this.props.onSaveEdit(false);
  };

  onPhoneChange = event => {
    this.setState({ phone: event.target.rawValue });
  };

  handleInputChange = event => {
    let tempState = {};
    tempState[event.target.name] = event.target.value;
    this.setState(tempState);
  };

  isNewUser = () => {
    if (this.props.currentUser.USER_CD === "") return true;
    else return false;
  };

  isFormValid = () =>
    !(
      this.state.userCode === null ||
      this.state.userCode === "" ||
      this.state.firstName === null ||
      this.state.firstName === "" ||
      this.state.lastName === null ||
      this.state.lastName === "" ||
      this.state.email === null ||
      this.state.email === "" ||
      this.state.phone === null ||
      this.state.phone === "" ||
      this.state.role === null ||
      this.state.role === "" ||
      this.state.password === null ||
      this.state.password === ""
    );

  addFormMessage = message => {
    if (message) {
      const messageElement = document.getElementById("message");
      messageElement.innerHTML = `<span>${message}</span>`;
      messageElement.classList.remove("collapse");
      messageElement.classList.add("collapse.show");
    }
  };

  clearFormMessage = () => {
    const messageElement = document.getElementById("message");
    messageElement.classList.remove("collapse.show");
    messageElement.classList.add("collapse");
  };

  onSave = event => {
    if (this.isNewUser()) {
      console.log("creating new user");
      this.onNewUserSave(event);
    } else {
      console.log("updating user");
      this.onUserUpdate(event);
    }
  };

  onUserUpdate = event => {
    event.preventDefault();
    put(this.state)
      .then(response => {
        console.log(response);
        this.props.onSaveEdit(false);
        this.props.onPasswordChange(false);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  onNewUserSave = event => {
    event.preventDefault();
    this.clearFormMessage();
    const pwd = document.getElementById("password").value;
    const rePassword = document.getElementById("re-enter-password").value;
    const formElement = document.getElementById("user-form");
    let message = pwd === rePassword ? null : "Passwords Do NOT match.";

    if (this.isFormValid()) {
      post(this.state).then(result => {
        console.log(result);
        this.setState({ userId: result.userId });
        this.addFormMessage("Saved Successfully!");
        const newUser = {
          USER_ID: result.userId,
          USER_CD: this.state.userCode,
          USER_FIRST_NM: this.state.firstName,
          USER_LAST_NM: this.state.lastName,
          USER_EMAIL: this.state.email,
          USER_PHONE: this.state.phone,
          USER_ROLE: this.state.role,
          USER_PW: this.state.password
        };
        this.props.onNewUserSave(newUser, false, false);
      });
    } else {
      formElement.classList.add("was-validated");
      this.addFormMessage(message);
    }
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
      .then(response => {
        console.log(response);
        messageElement.innerText = "Deleted Successfully!";
        messageElement.classList.remove("collapse");
        messageElement.classList.add("collapse.show");
        this.props.onUserDelete(this.state.userId);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col" />
          <div className="col-8">
            <form
              id="user-form"
              onSubmit={this.onSubmit}
              className="needs-validation"
              noValidate
            >
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
                    disabled
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
                    disabled={!this.isNewUser()}
                    type="text"
                    className="form-control"
                    id="code"
                    placeholder="Code"
                    name="userCode"
                    value={this.state.userCode}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide User Code.
                  </div>
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
                    disabled={!this.props.isEdit}
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide First Name.
                  </div>
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
                    disabled={!this.props.isEdit}
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide Last Name.
                  </div>
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
                    disabled={!this.props.isEdit}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="sample@email.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                  />
                  <div className="invalid-feedback">Please provide Email.</div>
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
                  <Cleave
                    // placeholder="xxx xxx xxxx"
                    disabled={!this.props.isEdit}
                    className="form-control"
                    id="phone"
                    name="phone"
                    options={{ phone: true, phoneRegionCode: "US" }}
                    value={this.state.phone}
                    onChange={this.onPhoneChange}
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide Phone Number.
                  </div>
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
                    disabled={!this.props.isEdit}
                    id="role"
                    name="role"
                    className="form-control"
                    value={this.state.role}
                    onChange={this.handleInputChange}
                    required
                  >
                    <option value="" />
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="User">User</option>
                  </select>
                  <div className="invalid-feedback">Please select role.</div>
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
                    disabled={!this.props.editCredentials}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder=""
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                    // disabled
                  />
                  <div className="invalid-feedback">
                    Please provide Password.
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <label
                  htmlFor="re-enter-password"
                  className="col-md-2 col-form-label text-right"
                  // disabled
                >
                  Re-enter Password
                </label>
                <div className="col-md-10">
                  <input
                    disabled={!this.props.editCredentials}
                    type="password"
                    className="form-control"
                    id="re-enter-password"
                    placeholder=""
                    name="reEnterPassword"
                    value={this.state.reEnterPassword}
                    onChange={this.handleInputChange}
                    required
                    // disabled
                  />
                  <div className="invalid-feedback">
                    Please re-enter password.
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12 text-center">
                  <button
                    type="submit"
                    className="mr-3 btn btn-outline-primary"
                    onClick={this.onSave}
                    value={this.state.save}
                    id="save"
                    name="save"
                    to="/user"
                    // to="/view"
                  >
                    Save
                  </button>
                  <button
                    onClick={this.onChangePassword}
                    type="button"
                    className="mr-3 btn btn-outline-secondary"
                  >
                    Change Password
                    {/* <Link to="/user">Change Password</Link> */}
                  </button>
                  <Link
                    type="button"
                    className="mr-3 btn btn-outline-danger"
                    onClick={this.onDelete}
                    to="/"
                  >
                    Delete User
                  </Link>
                  <button
                    type="button"
                    className="mr-3 btn btn-outline-info"
                    onClick={() => this.props.onSaveEdit(true)}
                  >
                    User Edit
                  </button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
