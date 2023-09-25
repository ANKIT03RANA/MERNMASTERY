import axiox from 'axios';

const url = 'http://localhost:5000/posts';

export const fetcPosts = ()=> axios.get(url);