import React, { Component } from "react";
import axios from 'axios';
// import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentDidMount() {
    axios.get('https://qr4a7rzn31.execute-api.us-east-2.amazonaws.com/dev/users', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      crossDomain: true
    })
    .then((result) => {
      console.dir(result);
      this.setState({users: result.data});
    });
  }

  renderUsers() {
    return this.state.users.map((user, index) => {
      return (
        <tr key={index}>
          <th scope='row'>View, Edit Icon</th>
          <td>{user.USER_ID}</td>
          {/* <td>{user.USER_CD}</td> */}
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
      <div className="container" id="main-container">
        <div className="row">
          <div className='col-sm'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Action</th>
                  {/*
                  <button className="btn fa fa-plus" type="submit"></button> */}
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Primary Role</th>
                  <th scope="col">Password</th>
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
}