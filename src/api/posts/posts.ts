import { axiosInstance } from '../config';

export const getPosts = async () => {
  const res = await axiosInstance.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return res;
};
