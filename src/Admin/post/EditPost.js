import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [tag, setTag] = useState("");
  const [content, setContent] = useState("");
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const { id } = useParams();

  const loadSinglePost = async () => {
    const response = await fetch(`http://13.214.58.126:3001/posts/${id}`);
    const resData = await response.json();
    const curPost = resData.result;
    setTitle(curPost.title);
    setContent(curPost.content);
    setCat(curPost.cat);
    setTag(curPost.tag)
  };

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
    loadSinglePost();
    loadCats();
    loadTags();
  }, []);

  const apiUpdatePost = async () => {
    const updateData = {title, cat, tag, content};
    const response = await fetch(`http://13.214.58.126:3001/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateData),
      headers: {
        'content-type': "application/json",
        authorization: `Bearer ${userData.token}`
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

  const postEditHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    apiUpdatePost();
  };

  return (
    <div className="col-md-8 mx-auto">
      {isLoading && <Loading />}
      <h2 className="text-center mb-5">Edit Post</h2>
      <form onSubmit={postEditHandler}>
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
              {cats?.map((el) => (
                <option key={el._id} value={el._id} selected={el._id === cat}>
                  {el.name}
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
              {tags?.map((el) => (
                <option key={el._id} value={el._id} selected={el._id === tag} >
                  {el.name}
                </option>
              ))}
            </select>
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
            value={content}
            className="form-control"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="">
          <button className="btn btn-primary me-1">update</button>
          <button className="btn btn-danger">cancle</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
