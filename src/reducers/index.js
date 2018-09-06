import { FETCH_DATA, EDIT_USER } from "../actions";

export const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case "delete_user":
      let userId = action.payload;
      return state.filter(user => user.USER_ID !== userId);
    default:
      return state;
  }
};

export const currentUser = (state = {}, action) => {
  switch (action.type) {
    case EDIT_USER:
      return action.payload;
    default:
      return state;
  }
};

export const isEdit = (state = false, action) => {
  switch (action.type) {
    case "user_edit":
      return action.payload;
    default:
      return state;
  }
};

export const editCredentials = (state = false, action) => {
  switch (action.type) {
    case "credentials_edit":
      return action.payload;
    default:
      return state;
  }
};

export const id = (state = 0, action) => {
  switch (action.type) {
    case "change_id":
      return action.payload;
    default:
      return state;
  }
};
