import React from "react";
import {FaRegEye} from "react-icons/fa"

const HomeAffair = ({ln}) => {
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <img src={`http://13.214.58.126:3001/uploads/${ln.image}`} className="card-img-top" alt="" />
        <div className="card-body">
            <h5 className="card-title">Card Title</h5>
          <p className="card-text">
           {ln.content.slice(0, 70)}...
          </p>
          <button className="btn btn-info btn-sm float-end">
              <FaRegEye className="mx-2 text-white fs-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAffair;
