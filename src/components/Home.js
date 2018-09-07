import React, { Component } from "react";
import { connect } from "react-redux";
import { editUser } from "../actions";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  onClick: (user, isEdit, editCredentials) => {
    dispatch(editUser(user));
    dispatch({ type: "user_edit", payload: isEdit });
    dispatch({ type: "credentials_edit", payload: editCredentials });
  }
});

class Home extends Component {
  renderUsers() {
    const { users, onClick } = this.props;
    console.log("home Component");
    console.dir(this.props);
    return users.map((user, index) => {
      return (
        <tr key={index} className="text-left">
          <th scope="row">
            <Link
              to={`/user/${user.USER_ID}`}
              onClick={() => onClick(user, false, false)}
            >
              <i className="mr-4 fas fa-eye fa-fw text-success" />
            </Link>
            <Link
              to={`/user/${user.USER_ID}`}
              onClick={() => onClick(user, true, false)}
            >
              <i className="fas fa-edit text-danger" />
            </Link>
          </th>
          <td>{user.USER_ID}</td>
          <td>{user.USER_CD}</td>
          {/* <td>{user.USER_CODE}</td> */}
          <td>{user.USER_FIRST_NM}</td>
          <td>{user.USER_LAST_NM}</td>
          <td>{user.USER_EMAIL}</td>
          <td>{user.USER_PHONE}</td>
          <td>{user.USER_ROLE}</td>
          <td>
            <i className="fa fa-key fa-fw key-font" />
          </td>
        </tr>
      );
    });
  }

  render() {
    const newUser = {
      USER_ID: "",
      USER_CD: "",
      USER_FIRST_NM: "",
      USER_LAST_NM: "",
      USER_EMAIL: "",
      USER_PHONE: "",
      USER_ROLE: "",
      USER_PW: ""
    };
    return (
      <div className="container-fluid" id="main-container">
        <div className="row">
          <div className="col-sm">
            <table className="table table-fixed">
              <thead className="bg-dark text-white mt-1">
                <tr className="text-left">
                  {/* <th scope="col">Action</th> */}
                  {/*
                <button className="btn fa fa-plus" type="submit"></button> */}
                  <th scope="col" className="text-nowrap">
                    Action&nbsp;
                    <Link
                      to="/user"
                      onClick={() => this.props.onClick(newUser, true, true)}
                    >
                      <i className="fas fa-plus-circle fa-fw yellow-font text-warning" />
                    </Link>
                  </th>
                  <th scope="col">#</th>
                  <th scope="col">Code</th>
                  <th scope="col">First Name</th>
                  <th scope="col" className="text-nowrap">
                    Last Name
                  </th>
                  <th scope="col" className="text-nowrap">
                    Email
                  </th>
                  <th scope="col" className="text-nowrap">
                    Phone
                  </th>
                  <th scope="col" className="text-nowrap">
                    Primary Role
                  </th>
                  <th scope="col" className="">
                    Password
                  </th>
                </tr>
              </thead>
              <tbody>{this.renderUsers()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
