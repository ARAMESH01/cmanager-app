import { FETCH_DATA, EDIT_USER } from '../actions';

export const users = (state = [], action) => {
    switch(action.type) {
        case FETCH_DATA:
            return action.payload;
        default:
            return state;
    }
};

export const currentUser = (state = {}, action) => {
  switch(action.type) {
    case EDIT_USER:
        return action.payload;
    default:
        return state;
  }
}

// export default todoApp;
