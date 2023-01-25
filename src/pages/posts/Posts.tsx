import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/useRedux';
import ListPost from './ListPost';
import { fetchPosts } from 'redux/ducks/postsDuck';

const Posts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h3>Posts:</h3>
      <ListPost />
    </div>
  );
};

export default Posts;
