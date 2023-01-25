import React from 'react';
import { useAppSelector } from 'hooks/useRedux';

const ListPost = () => {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <p>
            <b>{post.title}</b>
          </p>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListPost;
