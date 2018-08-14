import React, { Component } from "react";
import axios from 'axios';
// import "./Home.css";
import { createStore, combineReducers } from 'redux';
import reducers from '../reducers'
const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {users: []};
  }
  store.subscribe(render);

  componentDidMount() {
    axios.get('https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      crossDomain: true
    })
    .then((result) => {
      console.dir(result);
      let action = {type: 'FETCH_DATA', users: result.data};
      store.dispatch(action);
      // this.setState({users: result.data});
    });
  }

  renderUsers() {
    // const users = this.state.users;
     const users = store.getState();
    return users.map((user, index) => {
      return (
        <tr key={index}>
          <th scope='row'><i className="fas fa-eye"></i><a><i className="fas fa-edit"></i></a></th>
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
                <tr>
                  {/* <th scope="col">Action</th> */}
                  {/*
                  <button className="btn fa fa-plus" type="submit"></button> */}
                  <th scope='col' className='text-nowrap'>Action&nbsp;<a className="btn" href="#">
                  {/* <br/> */}
                  <i className="fas fa-plus-circle fa-fw yellow-font"></i></a></th>
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
}
