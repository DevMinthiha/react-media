import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SideNews from "../components/SideNews";
import banner1 from "../statics/banner1.jpg";
import banner2 from "../statics/banner2.jpg";

const CatPage = () => {
  const [hotNews, setHotNews] = useState([]);
  const [title, setTitle] = useState("");
  const [catPost, setCatPost] = useState([]);
  const {type,id} = useSelector(state => state.pageSetter);


  const loadHotNews = async () => {
    const response = await fetch(
      `http://13.214.58.126:3001/posts/bytag/62a13ac702e3e94e7b2f882e`
    );
    const resData = await response.json();
    setHotNews(resData.result);
    console.log("Hot",resData);
  };

  const loadCatPosts = async () => {
    const response = await fetch(
      `http://13.214.58.126:3001/posts/${type}/${id}`
    );
    const resData = await response.json();
    setCatPost(resData.result);
    setTitle(resData.result[0].cat.name)
    console.log(resData);
  };

  useEffect(() => {
    // loadHotNews();
    loadCatPosts();
  }, [id]);

  return (
    <div className="container">
      <div className="d-flex my-3">
        <img src={banner1} alt="" />
        <img src={banner2} alt="" />
        <img src={banner1} alt="" />
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="bg-dark p-3 mb-2 d-flex justify-content-between rounded">
            <button className="btn btn-danger btn-sm">{title}</button>
            <button className="btn btn-primary btn-sm">Read More</button>
          </div>
          <div className="row">
            {catPost?.map((hn) => (
              <SideNews key={hn._id} post={hn} words="400" />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <div className="bg-dark p-3 mb-2 d-flex justify-content-between rounded">
              <button className="btn btn-danger btn-sm">Related News</button>
              <button className="btn btn-primary btn-sm">Read More</button>
            </div>
            {catPost?.map((hn) => (
              <SideNews key={hn._id} post={hn} words="100" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatPage;
