import * as api from "../api/index";
import { AUTH, Sign } from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // console.log("signin");
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    navigate("/");
    // history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    // console.log(data);

    dispatch({ type: AUTH, data });
    navigate("/");
    // history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const logIn = (state) => async (dispatch) => {
  try {
    dispatch({ type: Sign, data: state });
  } catch (error) {
    console.log(error);
  }
};
