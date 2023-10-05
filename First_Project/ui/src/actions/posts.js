import * as api from "../api/index";
import { FETCH_ALL, UPDATE, CREATE, DELETE } from "../constants/actionTypes";
//Action Creators  // this async(dispatch) syntax is because we are using thunk, as some time have gonna pass as we are working with async data and in place of return actions we are writing dispatch(actions)
// const actions = {type:'FETCH_ALL', payload:[]};
// dispatch(actions);

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: UPDATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  