import React from "react";


const Post = ({ post }) => {
  return (
    <div className='card'>
      <img className='img-responsive' src={post.coverImage} alt={post.title} />
      <h2 className="title">{post.title}</h2>
      <p className="brief">{post.brief}</p>
    </div>
  );
};

export default Post;
