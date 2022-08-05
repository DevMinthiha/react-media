import React from "react";

const HotNew = ({ hn }) => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <img src={`http://13.214.58.126:3001/uploads/${hn.image}`} className="img-fluid" alt="..." />
            </div>
            <div className="col-md-6">
              <p className="card-text">
                {hn.content.slice(0,100)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotNew;
