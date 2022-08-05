import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [tag, setTag] = useState("");
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const loadCats = async () => {
    const response = await fetch("http://13.214.58.126:3001/cats");
    const resData = await response.json();
    if (resData.con) {
      setCats(resData.result);
    } else {
      console.log(resData);
    }
  };

  const loadTags = async () => {
    const response = await fetch("http://13.214.58.126:3001/tags");
    const resData = await response.json();
    if (resData) {
      setTags(resData.result);
    } else {
      console.log(resData);
    }
  };

  useEffect(() => {
    loadCats();
    loadTags();
  }, []);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const apiPostAdd = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("cat", cat);
    formData.append("tag", tag);
    formData.append("content", content);
    formData.append("file", file);

    const response = await fetch("http://13.214.58.126:3001/posts", {
      method: "POST",
      body: formData,
      headers: {
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();
    if (resData.con) {
      navigate("/admin/posts/all");
    } else {
      console.log(resData);
    }
    setIsLoading(false);
  };

  const postAddHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiPostAdd();
  };

  return (
    <div className="col-md-8 mx-auto">
      {isLoading && <Loading/>}
      <h2 className="text-center mb-5">Add New Post</h2>
      <form onSubmit={postAddHandler}>
        <div className="row">
          <div className="form-group mb-4 col-md-6">
            <label htmlFor="title" className="form-lable">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group mb-4 col-md-6">
            <label htmlFor="categoryId" className="form-lable">
              Category
            </label>
            <select
              id="categoryId"
              className="form-control"
              onChange={(e) => setCat(e.target.value)}
            >
              {cats?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="form-group mb-4 col-md-6">
            <label htmlFor="tagId" className="form-lable">
              Tag
            </label>
            <select
              id="tagId"
              className="form-control"
              onChange={(e) => setTag(e.target.value)}
            >
              {tags?.map((tag) => (
                <option key={tag._id} value={tag._id}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-4 col-md-6">
            <label htmlFor="image" className="form-lable">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              onChange={onFileChange}
            />
          </div>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="content" className="form-lable">
            Content
          </label>
          <textarea
            name="content"
            cols="30"
            rows="5"
            className="form-control"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="">
          <button className="btn btn-primary me-1">create</button>
          <button className="btn btn-danger">cancle</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
