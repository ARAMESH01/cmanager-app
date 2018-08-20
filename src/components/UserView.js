import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = ({currentUser}) => ({
  currentUser
});

class UserView extends Component {

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
              <div className="col-md-10 text-left">
                <i>{currentUser.USER_ID}</i>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="code" className="col-md-2 col-form-label text-right">Code</label>
              <div className="col-md-10 text-left">
                <i>{currentUser.USER_CD}</i>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="first-name" className="col-md-2 col-form-label text-right">First Name</label>
              <div className="col-md-10 text-left">
                <i>{currentUser.USER_FIRST_NM}</i>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="last-name" className="col-md-2 col-form-label text-right">Last Name</label>
              <div className="col-md-10 text-left">
                <i>{currentUser.USER_LAST_NM}</i>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-md-2 col-form-label text-right">Email</label>
              <div className="col-md-10 text-left">
                <i>{currentUser.USER_EMAIL}</i>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="phone" className="col-md-2 col-form-label text-right">Phone</label>
              <div className="col-md-10 text-left">
                <i>{currentUser.USER_PHONE}</i>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="role" className="col-md-2 col-form-label text-right">Role</label>
              <div className="col-md-10 text-left">
                <i>{currentUser.USER_ROLE}</i>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-md-2 col-form-label text-right">Password</label>
              <div className="col-md-10 text-left">
                {/* <i>{currentUser.USER_PW}</i> */}
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="re-enter-password" className="col-md-2 col-form-label text-right">Re-enter Password</label>
              <div className="col-md-10 text-left">
                <i></i>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12 text-left">
                <button type="submit" className="btn btn-outline-primary mr-2">Change Password</button>
                <button type="button" className="btn btn-outline-secondary mr-2">Update User</button>
                <button type="button" className="btn btn-outline-danger mr-2">Delete User</button>
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

export default connect(mapStateToProps)(UserView);
