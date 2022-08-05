import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const apiRegister = async (user) => {
    const response = await fetch("http://13.214.58.126:3001/users/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resData = await response.json();
    if (resData.con) {
      navigate("/login");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      console.log(resData);
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    let user = { name, email, phone, password };
    apiRegister(user);
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  return (
    <div className="container">
      <form
        onSubmit={registerHandler}
        className="w-50 mx-auto"
        style={{ marginTop: "150px", marginBottom: "48px" }}
      >
        {isLoading && <Loading />}

        <h2 className="text-center mb-5">Register To Be A Member</h2>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="tel"
            className="form-control"
            required
            minLength={8}
            maxLength={11}
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
            required
            minLength={5}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="mb-4">
          Already Member! <Link to="/login">Login Here</Link>
        </p>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success btn-sm">
            Register
          </button>
          <button className="btn btn-danger btn-sm">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
