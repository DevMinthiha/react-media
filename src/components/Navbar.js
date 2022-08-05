import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SetPage, userRemove } from "../redux/actions";

const Navbar = () => {
  const userData = useSelector((state) => state.userData);
  const [cats, setCats] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(userRemove(null));
    navigate("/login");
  };

  const changePage = (type, id) => {
    dispatch(SetPage({ type, id }));
    navigate("/catpage");
  };

  const loadCats = async () => {
    const response = await fetch("http://13.214.58.126:3001/cats");
    const resData = await response.json();
    if (resData) {
      setCats(resData.result);
      console.log(cats);
    } else {
      console.log(resData);
    }
  };

  useEffect(() => {
    loadCats();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container py-1 d-flex align-items-center">
        <Link to={"/"} className="navbar-brand text-light fw-bold">
          <span className="text-primary">REACT</span> Media
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ps-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            {userData && (
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/admin"
              >
                <li className="nav-item">Admin</li>
              </Link>
            )}
            {cats?.map((cat) => (
              <li className="nav-item" key={cat._id}>
                <p
                  style={{ cursor: "pointer" }}
                  className="nav-link text-light cursor-pointer"
                  aria-current="page"
                  onClick={() => changePage("bycat", cat._id)}
                >
                  {cat.name}
                </p>
              </li>
            ))}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-light"
                href="#dd"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FaUserAlt />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {!userData && (
                  <li>
                    <Link className="dropdown-item" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {!userData && (
                  <li>
                    <Link className="dropdown-item" to="/register">
                      Register
                    </Link>
                  </li>
                )}
                {userData && (
                  <li>
                    <p className="dropdown-item" onClick={logout}>
                      Logout
                    </p>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
