import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import HotNew from "../components/HotNew";
import ads1 from "../statics/sideads.jpg";
import p1 from "../statics/p1.jpg";
import p2 from "../statics/p2.jpg";
import p3 from "../statics/p3.jpg";
import p4 from "../statics/p4.jpg";
import p5 from "../statics/p5.jpg";
import HomeAffair from "../components/HomeAffair";
import SideNews from "../components/SideNews";
import SideVideo from "../components/SideVideo";
import banner1 from "../statics/banner1.jpg";
import banner2 from "../statics/banner2.jpg";
import { Link } from "react-router-dom";
import { getData } from "../Api";

const Home = () => {
  const [hotNews, setHotNews] = useState([]);
  const [localNews, setLocalNews] = useState([]);

  // const loadHotNews = async () => {
  //   const response = await fetch(
  //     `http://13.214.58.126:3001/posts/bytag/62a13ac702e3e94e7b2f882e`
  //   );
  //   const resData = await response.json();
  //   setHotNews(resData.result);
  //   console.log(hotNews);
  // };

  // const loadLocalNews = async() => {
  //   const response = await fetch("http://13.214.58.126:3001/posts/bycat/62a140c402e3e94e7b2f8872");
  //   const resData = await response.json();
  //   setLocalNews(resData.result);
  //   console.log("local", resData);
  // }

  const loadNews = async () => {
    const hotNewsData = await getData("/posts/bytag/62a13ac702e3e94e7b2f882e");
    setHotNews(hotNewsData.result);

    const localNewsData = await getData(
      "/posts/bycat/62a140c402e3e94e7b2f8872"
    );
    setLocalNews(localNewsData.result);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-8">
          <div className="bg-dark p-3 mb-2 d-flex justify-content-between rounded">
            <button className="btn btn-danger btn-sm">Hot News</button>
            <Link to="/catpage" className="btn btn-primary btn-sm">
              Read More
            </Link>
          </div>
          <div className="row">
            {hotNews?.map((hn) => (
              <HotNew key={hn._id} hn={hn} />
            ))}
            <div className="d-flex mb-3">
              <img src={banner1} alt="" />
              <img src={banner2} alt="" />
            </div>
          </div>
          <div className="bg-dark p-3 mb-2 d-flex justify-content-between rounded mt-2">
            <button className="btn btn-danger btn-sm">Local News</button>
            <button className="btn btn-primary btn-sm">Read More</button>
          </div>
          <div className="row">
            {localNews
              ?.map((ln) => <HomeAffair key={ln._id} ln={ln} />)
              .splice(0, 6)}
          </div>
        </div>
        <div className="col-md-4">
          <img src={ads1} width="100%" alt="" />
          <div className="pt-3">
            <div className="bg-dark p-3 mb-2 d-flex justify-content-between rounded">
              <button className="btn btn-danger btn-sm">Hot News</button>
              <button className="btn btn-primary btn-sm">Read More</button>
            </div>
            {hotNews
              ?.map((hn) => <SideNews key={hn._id} post={hn} words="100" />)
              .splice(0, 3)}
            <div className="bg-dark p-3 mb-2 d-flex justify-content-between rounded mt-4">
              <button className="btn btn-danger btn-sm">TV News</button>
              <button className="btn btn-primary btn-sm">Read More</button>
            </div>
            <SideVideo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
