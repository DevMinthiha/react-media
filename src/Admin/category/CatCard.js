import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const CatCard = ({ cat, apiCatDestroy }) => {

  return (
    <div className="col-md-3">
      <div className="card mb-3" style={{ height: "280px" }}>
        <img
          src={`http://13.214.58.126:3001/uploads/${cat.image}`}
          style={{ height: "150px" }}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <p className="card-text">{cat.name}</p>
          <Link to={`/admin/cats/edit/${cat._id}`} className="btn btn-success">
            <FaEdit />
          </Link>
          <button className="btn btn-danger ms-3" onClick={() => apiCatDestroy(cat._id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
