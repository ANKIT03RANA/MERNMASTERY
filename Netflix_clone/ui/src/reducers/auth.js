import { AUTH, LOGOUT, Sign } from "../constants/actionTypes";

const AuthReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case Sign:
        return {...state, isSignUp:action?.data};
    default:
      return state;
  }
};

export default AuthReducer;