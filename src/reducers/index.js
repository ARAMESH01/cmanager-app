import { FETCH_DATA, EDIT_USER } from '../actions';

export const users = (state = {users: []}, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {users: action.payload};
        default:
            return state;
    }
};

export const currentUser = (state = {currentUser: {}}, action) => {
  switch(action.type) {
    case EDIT_USER:
        return {currentUser: action.payload};
    default:
        return state;
  }
}

// export default todoApp;
