import React from "react";
import { Link } from "react-router-dom";

const SideNews = ({ post, words }) => {
  return (
    <div className="my-3">
      <div className="row">
        <div className="col-md-6">
          <img src={`http://13.214.58.126:3001/uploads/${post.image}`} className="img-fluid" alt="..." />
        </div>
        <div className="col-md-6">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">
            {post.content.slice(0,words)}
            <Link to={`/detail/${post._id}`}>see more</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideNews;
