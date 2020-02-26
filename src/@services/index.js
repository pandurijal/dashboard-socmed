import axios from 'axios';

const root = 'https://jsonplaceholder.typicode.com';

export const getUserListService = () => {
  return axios.get(`${root}/users`);
};

export const getPostsService = id => {
  return axios.get(`${root}/users/${id}/posts`);
};

export const getCommentsService = id => {
  return axios.get(`${root}/posts/${id}/comments`);
};

export const deletePostService = id => {
  return axios.delete(`${root}/posts/${id}`);
};

export const getAlbumsService = id => {
  return axios.get(`${root}/users/${id}/albums`);
};
