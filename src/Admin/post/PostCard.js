import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const PostCard = ({ post, apiPostDelete }) => {


  return (
    <div className="col-md-3">
      <div className="card mb-3" style={{ height: "280px" }}>
        <img
          src={`http://13.214.58.126:3001/uploads/${post.image}`}
          style={{ height: "150px" }}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content.slice(0, 15)}...</p>
          <Link
            to={`/admin/posts/edit/${post._id}`}
            className="btn btn-success"
          >
            <FaEdit />
          </Link>
          <button
            className="btn btn-danger ms-3"
            onClick={() => apiPostDelete(post._id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
