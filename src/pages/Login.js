import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../Api";
import Loading from "../components/Loading";
import { userAdd } from "../redux/actions";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  const apiLogin = async (user) => {
    const resData = await postData("/users", user, "");
    if (resData.con) {
      setIsLoading(false);
      if (isChecked) {
        localStorage.setItem(
          "react-media",
          JSON.stringify({ phone, password })
        );
      } else {
        localStorage.removeItem("react-media");
      }
      dispatch(userAdd(resData.result));
      navigate("/admin");
    } else {
      setIsLoading(false);
      console.log(resData);
    }
  };

  useEffect(() => {
    const loaclData = JSON.parse(localStorage.getItem("react-media"));
    if (loaclData) {
      setIsChecked(true);
      setPhone(loaclData.phone);
      setPassword(loaclData.password);
    }
  }, []);

  const userLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let user = { phone, password };
    apiLogin(user);
  };

  return (
    <div className="container">
      {isLoading && <Loading />}
      <form
        onSubmit={userLogin}
        className="w-50 mx-auto"
        style={{ marginTop: "150px", marginBottom: "94px" }}
      >
        <h2 className="text-center mb-5">Login To Posts</h2>
        <div className="form-group mb-4">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>
        <p className="mb-4">
          Not a member yet! <Link to="/register">Register Here</Link>
        </p>
        <div className="d-flex gap-2">
          <button className="btn btn-primary btn-sm" type="submit">
            Login
          </button>
          <button className="btn btn-danger btn-sm">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
