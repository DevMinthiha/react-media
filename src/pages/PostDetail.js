import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideNews from "../components/SideNews";
import banner1 from "../statics/banner1.jpg";
import banner2 from "../statics/banner2.jpg";

const PostDetail = () => {
  const [hotNews, setHotNews] = useState([]);
  const [post, setPost] = useState({});
  const [postdate, setpostDate] = useState("");
  const { id } = useParams();
  console.log(id);

  const loadHotNews = async () => {
    const response = await fetch(
      `http://13.214.58.126:3001/posts/bytag/62a13ac702e3e94e7b2f882e`
    );
    const resData = await response.json();
    setHotNews(resData.result);
    console.log("Hot", resData);
  };

  const loadSinglePost = async () => {
    const response = await fetch(`http://13.214.58.126:3001/posts/${id}`);
    const resData = await response.json();
    if (resData) setPost(resData.result);
    setpostDate(resData.result.created.split("T")[0]);
    console.log(resData);
  };

  useEffect(() => {
    loadHotNews();
    loadSinglePost();
  }, []);

  return (
    <div className="container">
      <div className="d-flex my-3">
        <img src={banner1} alt="" />
        <img src={banner2} alt="" />
        <img src={banner1} alt="" />
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="bg-dark p-3 mb-2 d-flex justify-content-center">
            <p className="text-white text-center">{post.title}</p>
          </div>
          <div className="row">
            <img
              src={`http://13.214.58.126:3001/uploads/${post.image}`}
              height={"450px"}
              width="100%"
              alt=""
            />
            <strong>date : {postdate}</strong>
            <p className="detail-para my-3">{post.content}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <div className="bg-dark p-3 mb-2 d-flex justify-content-between rounded">
              <button className="btn btn-danger btn-sm">Related News</button>
            </div>
            {hotNews?.map((hn) => (
              <SideNews key={hn._id} post={hn} words="100" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
