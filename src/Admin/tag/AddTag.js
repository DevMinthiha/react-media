import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const AddTag = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);

  const onFileChangle = (e) => {
    setFile(e.target.files[0]);
  };

  const apiCategoryAdd = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    const response = await fetch("http://13.214.58.126:3001/tags", {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();
    if (resData.con) {
      navigate("/admin/tags/all");
    } else {
      console.log(resData);
    }
    setIsLoading(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiCategoryAdd();
  };

  return (
    <form onSubmit={submitHandler} className="mx-auto w-50">
      {isLoading && <Loading />}
      <h2 className="text-primary mb-4 text-center">Add New Tag</h2>
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
      <div className="form-group mb-4">
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input type="file" className="form-control" onChange={onFileChangle} />
      </div>
      <div className="d-flex gap-3 my-4">
        <button type="submit" className="btn btn-primary btn-sm">
          create
        </button>
        <button type="reset" className="btn btn-danger btn-sm">
          cancle
        </button>
      </div>
    </form>
  );
};

export default AddTag;
