import { FETCH_DATA, EDIT_USER, EDIT_FILTER } from "../actions";

export const users = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
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

export const editFilter = (state = "", action) => {
  switch (action.type) {
    case EDIT_FILTER:
      return action.payload;
    default:
      return state;
  }
};
