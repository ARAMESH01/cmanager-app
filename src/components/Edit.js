import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const mapStateToProps = ({currentUser}) => ({
  currentUser
});

class Edit extends Component {

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
                <input type="text" className="form-control" id="user-id" placeholder="User Id" name="userId" value={currentUser.USER_ID} onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="code" className="col-md-2 col-form-label text-right">Code</label>
              <div className="col-md-10">
                <input type="text" className="form-control" id="code" placeholder="Code" name="userCode" value={currentUser.USER_CD} onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="first-name" className="col-md-2 col-form-label text-right">First Name</label>
              <div className="col-md-10">
                <input type="text" className="form-control" id="first-name" placeholder="First Name" name="firstName" value={currentUser.USER_FIRST_NM}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="last-name" className="col-md-2 col-form-label text-right">Last Name</label>
              <div className="col-md-10">
                <input type="text" className="form-control" id="last-name" placeholder="Last Name" name="lastName" value={currentUser.USER_LAST_NM}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-md-2 col-form-label text-right">Email</label>
              <div className="col-md-10">
                <input type="email" className="form-control" id="email" placeholder="sample@email.com" name="email" value={currentUser.USER_EMAIL}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="phone" className="col-md-2 col-form-label text-right">Phone</label>
              <div className="col-md-10">
                <input type="text" className="form-control" id="phone" placeholder="000-000-0000" name="phone" value={currentUser.USER_PHONE} onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="role" className="col-md-2 col-form-label text-right">Role</label>
              <div className="col-md-10">
                <select id="role" name="role" className="form-control" value={currentUser.USER_ROLE} onChange={this.handleInputChange}>
                  <option value=""></option>
                  <option value="admin">Admin</option>
                  <option value="manager">Manager</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-md-2 col-form-label text-right">Password</label>
              <div className="col-md-10">
                <input type="password" className="form-control" id="password" placeholder="" name="password" value={currentUser.USER_PW}
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="re-enter-password" className="col-md-2 col-form-label text-right">Re-enter Password</label>
              <div className="col-md-10">
                <input type="password" className="form-control" id="re-enter-password" placeholder="" name="reEnterPassword" value=""
                  onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-outline-primary">Save</button>
                <button type="button" className="btn btn-outline-secondary">Change Password</button>
                <button type="button" className="btn btn-outline-danger">Delete User</button>
                <button type="button" className="btn btn-outline-info">User List</button>
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
