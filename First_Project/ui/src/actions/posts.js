import * as api from '../api/index';

//Action Creators  // this async(dispatch) syntax is because we are using thunk, as some time have gonna pass as we are working with async data and in place of return actions we are writing dispatch(actions)
// const actions = {type:'FETCH_ALL', payload:[]};
// dispatch(actions);

export const getPosts = () => async(dispatch) => {
    try {
        const {data}= await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload:data});
    } catch (error) {
        console.log(error);
    }
}