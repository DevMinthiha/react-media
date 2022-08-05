import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const userData = useSelector((state) => state.userData);
  const loadPosts = async () => {
    const response = await fetch(`http://13.214.58.126:3001/posts/paginate/${page}`);
    const resData = await response.json();
    if (resData.con) {
      setPosts(resData.result);
    } else {
      console.log(resData);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [page]);

  const apiPostDelete = async (id) => {
    const response = await fetch(`http://13.214.58.126:3001/posts/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${userData.token}`,
      },
    });
    const resData = await response.json();
    loadPosts();
    console.log(resData);
  };

  const increasePage = () => setPage(prev => prev + 1);
  const decreasePage = () => {
    if(page >= 2) {
      setPage(prev => prev - 1)
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/admin/posts/add" className="btn btn-primary mb-3">
          Add
        </Link>
        <div className="pagination pagination-sm">
          <button className="page-item page-link" onClick={decreasePage}>prev</button>
          <button className="page-item page-link" onClickCapture={increasePage}>next</button>
        </div>
      </div>
      <div className="row">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} apiPostDelete={apiPostDelete} />
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <div className="pagination pagination-sm my-5">
          <button className="page-item page-link" onClick={decreasePage}>prev</button>
          <button className="page-item page-link" onClick={increasePage}>next</button>
        </div>
      </div>
    </div>
  );
};

export default AllPost;
