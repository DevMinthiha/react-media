import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const TagCard = ({ tag, apiTagDestroy }) => {

  return (
    <div className="col-md-3">
      <div className="card mb-3" style={{ height: "280px" }}>
        <img
          src={`http://13.214.58.126:3001/uploads/${tag.image}`}
          style={{ height: "150px" }}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <p className="card-text">{tag.name}</p>
          <Link to={`/admin/tags/edit/${tag._id}`} className="btn btn-success">
            <FaEdit />
          </Link>
          <button className="btn btn-danger ms-3" onClick={() => apiTagDestroy(tag._id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TagCard;
