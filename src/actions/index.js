export const FETCH_DATA = "fetch_data";
export const EDIT_USER = "edit_user";

export function defaultFunction() {
  return { type: FETCH_DATA };
}

export const editUser = user => {
  return { type: EDIT_USER, payload: user };
};
