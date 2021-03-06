import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { users, currentUser, isEdit, editCredentials, id } from "./reducers";
import { getInitialState } from "./services/user-api";

// const getInitialState = () => {
//   return axios
//     .get("https://enbx9hfr33.execute-api.us-east-2.amazonaws.com/dev/users", {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       crossDomain: true
//     })
//     .then(result => {
//       console.dir(result);
//       return { users: result.data };
//     });
// };

// const getInitialState = () => {
//   return Promise.resolve({
//     users: [
//       {
//         USER_ID: 1,
//         USER_CD: "bninan",
//         USER_FIRST_NM: "Biju",
//         USER_LAST_NM: "Ninan",
//         USER_EMAIL: "bijuninans@quadyster.com",
//         USER_PHONE: "(309)269-3514",
//         USER_ROLE: "Admin",
//         USER_PW: "89kyPKoZSOyZ9xFac2971A=="
//       },
//       {
//         USER_ID: 2,
//         USER_CD: "cblrao",
//         USER_FIRST_NM: "CBL",
//         USER_LAST_NM: "Rao",
//         USER_EMAIL: "CBLRAO@quadyster.com",
//         USER_PHONE: "(309)269-2671",
//         USER_ROLE: "Admin",
//         USER_PW: "dHphUStYdUFqMkdzYTMvMUVxbmFOZz09"
//       },
//       {
//         USER_ID: 3,
//         USER_CD: "andrew",
//         USER_FIRST_NM: "Andrew",
//         USER_LAST_NM: "Pattiwael",
//         USER_EMAIL: "apattiwael1@quadyster.com",
//         USER_PHONE: "(563) 742-1307",
//         USER_ROLE: "User",
//         USER_PW: "WkVod2FGVlRkRmxrVlVaeFRXdGtlbGxVVFhaTlZWWjRZbTFHVDFwNk1Eaz0="
//       },
//       {
//         USER_ID: 4,
//         USER_CD: "haribanda",
//         USER_FIRST_NM: "Hari",
//         USER_LAST_NM: "Banda",
//         USER_EMAIL: "haribanda@quadyster.com",
//         USER_PHONE: "(309) 230-5244",
//         USER_ROLE: "User",
//         USER_PW: "tzaQ+XuAj2Gsa3/1EqnaNg=="
//       },
//       {
//         USER_ID: 5,
//         USER_CD: "lakshmi",
//         USER_FIRST_NM: "Lakshmi",
//         USER_LAST_NM: "Chaganti",
//         USER_EMAIL: "lakshmi@quadyster.com",
//         USER_PHONE: "(219) 869-2199",
//         USER_ROLE: "User",
//         USER_PW: "tzaQ+XuAj2Gsa3/1EqnaNg=="
//       },
//       {
//         USER_ID: 6,
//         USER_CD: "mahita",
//         USER_FIRST_NM: "Mahita",
//         USER_LAST_NM: "Varre",
//         USER_EMAIL: "mvarre@quadyster.com",
//         USER_PHONE: "(563) 639-5240",
//         USER_ROLE: "User",
//         USER_PW: "tzaQ+XuAj2Gsa3/1EqnaNg=="
//       },
//       {
//         USER_ID: 7,
//         USER_CD: "pavani",
//         USER_FIRST_NM: "Pavani",
//         USER_LAST_NM: "Rampalli",
//         USER_EMAIL: "prampalli@quadyster.com",
//         USER_PHONE: "(937) 750-6255",
//         USER_ROLE: "User",
//         USER_PW: "tzaQ+XuAj2Gsa3/1EqnaNg=="
//       },
//       {
//         USER_ID: 8,
//         USER_CD: "rajasree",
//         USER_FIRST_NM: "Rajasree",
//         USER_LAST_NM: "Chimpidi",
//         USER_EMAIL: "rchimpidi@quadyster.com",
//         USER_PHONE: "(309) 781-5733",
//         USER_ROLE: "User",
//         USER_PW: "tzaQ+XuAj2Gsa3/1EqnaNg=="
//       },
//       {
//         USER_ID: 9,
//         USER_CD: "ramkumar",
//         USER_FIRST_NM: "Ramkumar",
//         USER_LAST_NM: "Sankaranarayanan",
//         USER_EMAIL: "ramkumar@quadyster.com",
//         USER_PHONE: "(563) 514-5719",
//         USER_ROLE: "User",
//         USER_PW: "WkVod2FGVlRkRmxrVlVaeFRXdGtlbGxVVFhaTlZWWjRZbTFHVDFwNk1Eaz0="
//       },
//       {
//         USER_ID: 11,
//         USER_CD: "sjogi",
//         USER_FIRST_NM: "Sushma",
//         USER_LAST_NM: "Jogi",
//         USER_EMAIL: "sjogi@quadyster.com",
//         USER_PHONE: "5551234567",
//         USER_ROLE: "User",
//         USER_PW: "UXVhZEA1MjcyMg=="
//       },
//       {
//         USER_ID: 14,
//         USER_CD: "aramesh",
//         USER_FIRST_NM: "Aparna",
//         USER_LAST_NM: "Ramesh",
//         USER_EMAIL: "aramesh@quadyster.com",
//         USER_PHONE: "3099124590",
//         USER_ROLE: "Admin",
//         USER_PW: "dHphUStYdUFqMkdzYTMvMUVxbmFOZz09"
//       },
//       {
//         USER_ID: 15,
//         USER_CD: "galokkan",
//         USER_FIRST_NM: "Geethu",
//         USER_LAST_NM: "Alokkan",
//         USER_EMAIL: "galokkan@quadyster.com",
//         USER_PHONE: "6787045770",
//         USER_ROLE: "Manager",
//         USER_PW: "UXVhZEA1MjcyMg=="
//       },
//       {
//         USER_ID: 16,
//         USER_CD: "aramesh1",
//         USER_FIRST_NM: "Aparna",
//         USER_LAST_NM: "Ramesh",
//         USER_EMAIL: "aramesh@quadyster.com",
//         USER_PHONE: "3099124590",
//         USER_ROLE: "Manager",
//         USER_PW:
//           "Vm1wR1UxTXlUbkpPVm1SVllrZG9WVmxVU205aFJsWnpZVVpPV0Zac1dubFhhMXBQWVd4YWMxZHNXbFpOYWxaeVdWWmFTbVF4WkhK"
//       }
//     ]
//   });
// };

getInitialState().then(initialState => {
  console.log("initialState before createStore");
  console.dir(initialState);
  const store = createStore(
    // combineReducers({ users, currentUser, isEdit, editCredentials }),
    combineReducers({ users, currentUser, isEdit, editCredentials, id }),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  console.log("initialState after createStore");
  console.dir(store.getState());

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
});
