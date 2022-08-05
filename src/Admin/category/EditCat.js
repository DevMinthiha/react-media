import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const EditCat = () => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const apiCategoryUpdate = async () => {
    const response = await fetch(`http://13.214.58.126:3001/cats/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ name: name }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`
      },
    });
    const resData = await response.json();
    if (resData.con) {
      navigate("/admin/cats/all");
    } else {
      console.log(resData);
    }
    setIsLoading(false);
  };

  const loadCategory = async () => {
    const response = await fetch(`http://13.214.58.126:3001/cats/${id}`);
    const resData = await response.json();
    if(resData) {
      setName(resData.result.name);
    } else {
      console.log(resData);
    }
  };

  useEffect(() => {
    loadCategory();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    apiCategoryUpdate();
    setIsLoading(true);
  };

  return (
    <form onSubmit={submitHandler} className="mx-auto w-50">
      {isLoading && <Loading />}
      <h2 className="text-primary mb-4 text-center">Edit Category</h2>
      <div className="form-group mb-4">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="d-flex gap-3 my-4">
        <button type="submit" className="btn btn-success btn-sm">
          update
        </button>
        <button type="reset" className="btn btn-danger btn-sm">
          cancle
        </button>
      </div>
    </form>
  );
};

export default EditCat;
