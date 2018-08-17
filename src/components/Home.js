import React, { Component } from "react";
import { connect } from 'react-redux';
import User from './User';
import Edit from './Edit';
import { editUser } from '../actions';
import { Link } from "react-router-dom";

const mapStateToProps = ({users}) => ({
  users
});

const mapDispatchToProps = () => {
  return editUser;
};

class Home extends Component {
  onUserClick = (user) => {
    this.props.editUser(user);
  }

  renderUsers() {
    const users = this.props.users;
    return users.map((user, index) => {
      return (
        <tr key={index} class="text-left">
          <th scope='row'>
            {/* <Link to="/edit" onClick={this.onUserClick(user)}><i className="fas fa-edit text-danger" ></i></Link> */}
            <a className="btn" href="/user"><i className="fas fa-eye text-success"></i></a>
            <a className="btn" href="/edit"><i className="fas fa-edit text-danger" onClick={this.onUserClick(user)}></i></a>
          </th>
          <td>{user.USER_ID}</td>
          <td>{user.USER_CD}</td>
          {/* <td>{user.USER_CODE}</td> */}
          <td>{user.USER_FIRST_NM}</td>
          <td>{user.USER_LAST_NM}</td>
          <td>{user.USER_EMAIL}</td>
          <td>{user.USER_PHONE}</td>
          <td>{user.USER_ROLE}</td>
          <td><i className="fa fa-key fa-fw key-font"></i></td>
        </tr>
      )})
  }

  render() {
    return (
      <div className="container-fluid" id="main-container">
        <div className="row">
          <div className='col-sm'>
            <table className="table">
              <thead className="bg-dark text-white mt-1">
                <tr class="text-left">
                  {/* <th scope="col">Action</th> */}
                  {/*
                  <button className="btn fa fa-plus" type="submit"></button> */}
                  <th scope='col' className='text-nowrap'>Action&nbsp;<a className="btn" href="/User">
                  {/* <br/> */}
                  <i className="fas fa-plus-circle fa-fw yellow-font text-warning"></i></a></th>
                  <th scope="col">#</th>
                  <th scope="col">Code</th>
                  <th scope="col">First Name</th>
                  <th scope="col" className='text-nowrap'>Last Name</th>
                  <th scope="col" className='text-nowrap'>Email</th>
                  <th scope="col" className='text-nowrap'>Phone</th>
                  <th scope="col" className='text-nowrap'>Primary Role</th>
                  <th scope="col" className=''>Password</th>
                </tr>
              </thead>
              <tbody>
                {this.renderUsers()}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    );

  }
};

export default connect(mapStateToProps, {editUser})(Home);
