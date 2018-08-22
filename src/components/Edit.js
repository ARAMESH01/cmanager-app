import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = ({currentUser}) => ({
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
      reEnterPassword: ''
    };
  }

  handleInputChange = (event) => {
    let tempState = {};
    tempState[event.target.name] = event.target.value;
    this.setState(tempState);
  };

  onSubmit = (event) => {
    event.preventDefault();
    axios.post('https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users', 
      '{"userCode": "abcd"}', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      crossDomain: true
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const currentUser = this.props.currentUser;
    return (
      <div>
        <div className="row">
          <div className="col"></div>
          <div className="col-8">
            <form onSubmit={this.onSubmit}>
              <div className="form-group row">
                <label className="col-md-12 col-form-label text-center alert alert-danger collapse mt-2" id="message"></label>
              </div>
              <div className="form-group row">
                <label htmlFor="user-id" className="col-md-2 col-form-label text-right">User Id</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="user-id" placeholder="User Id" 
                    name="userId" value={this.state.userId} onChange={this.handleInputChange} disabled/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="code" className="col-md-2 col-form-label text-right">Code</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="code" placeholder="Code" 
                    name="userCode" value={this.state.userCode} onChange={this.handleInputChange} disabled/>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="first-name" className="col-md-2 col-form-label text-right">First Name</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="first-name" placeholder="First Name" 
                    name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="last-name" className="col-md-2 col-form-label text-right">Last Name</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="last-name" placeholder="Last Name" 
                    name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="email" className="col-md-2 col-form-label text-right">Email</label>
                <div className="col-md-10">
                  <input type="email" className="form-control" id="email" placeholder="sample@email.com" 
                    name="email" value={this.state.email} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="phone" className="col-md-2 col-form-label text-right">Phone</label>
                <div className="col-md-10">
                  <input type="text" className="form-control" id="phone" placeholder="000-000-0000" 
                    name="phone" value={this.state.phone} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="role" className="col-md-2 col-form-label text-right">Role</label>
                <div className="col-md-10">
                  <select id="role" name="role" className="form-control" value={this.state.role} onChange={this.handleInputChange}>
                    <option value=""></option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="password" className="col-md-2 col-form-label text-right">Password</label>
                <div className="col-md-10">
                  <input type="password" className="form-control" id="password" placeholder="" 
                    name="password" value={this.state.password} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="re-enter-password" className="col-md-2 col-form-label text-right">Re-enter Password</label>
                <div className="col-md-10">
                  <input type="password" className="form-control" id="re-enter-password" placeholder="" 
                    name="reEnterPassword" value={this.state.password} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12 text-center">
                  <button type="submit" className="mr-3 btn btn-outline-primary">Save</button>
                  <button type="button" className="mr-3 btn btn-outline-secondary">Change Password</button>
                  <button type="button" className="mr-3 btn btn-outline-danger">Delete User</button>
                  <button type="button" className="mr-3 btn btn-outline-info">User List</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Edit);
