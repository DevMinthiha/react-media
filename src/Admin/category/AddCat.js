import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postFormData } from "../../Api";
import Loading from "../../components/Loading";

const AddCat = () => {
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
    const resData = await postFormData("/cats", formData, userData.token);
    if (resData.con) {
      navigate("/admin/cats/all");
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
      <h2 className="text-primary mb-4 text-center">Add New Category</h2>
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

export default AddCat;
