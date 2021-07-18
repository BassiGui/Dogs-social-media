import React from 'react';
import TokenPost from './endpoints/TokenPost';
import UsePost from './endpoints/UsePost';
import PhotoPost from './endpoints/PhotoPost';
import PhotoGet from './endpoints/PhotoGet';

const Api = () => {
  return (
    <div>
      minha API
      <UsePost />
      <h2>Token post</h2>
      <TokenPost />
      <h2>Photo Post</h2>
      <PhotoPost />
      <h2>Photo Get</h2>
      <PhotoGet />
    </div>
  );
};

export default Api;
