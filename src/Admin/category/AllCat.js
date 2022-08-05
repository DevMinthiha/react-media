import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData } from "../../Api";
import CatCard from "./CatCard";

const AllCat = () => {
  const [cats, setCats] = useState([]);
  const loadCats = async () => {
    const response = await fetch("http://13.214.58.126:3001/cats");
    const resData = await response.json();
    if (resData.con) {
      setCats(resData.result);
    } else {
      console.log(resData);
    }
  };

  useEffect(() => {
    loadCats();
  }, []);

  const userData = useSelector((state) => state.userData);

  const apiCatDestroy = async (id) => {
    const resData = await deleteData(`/cats/${id}`, userData.token);
    loadCats();
    console.log(resData);
  };

  return (
    <div>
      <Link to="/admin/cats/add" className="btn btn-primary mb-3">
        Add
      </Link>
      <div className="row">
        {cats?.map((cat) => (
          <CatCard key={cat._id} cat={cat} apiCatDestroy={apiCatDestroy} />
        ))}
      </div>
    </div>
  );
};

export default AllCat;
