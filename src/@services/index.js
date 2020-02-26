import axios from 'axios';

const root = 'https://jsonplaceholder.typicode.com';

export const getUserListService = () => {
  return axios.get(`${root}/users`);
};

export const getPostsService = id => {
  return axios.get(`${root}/users/${id}/posts`);
};
