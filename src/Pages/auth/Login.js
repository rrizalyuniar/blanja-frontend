import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import vektor from "../../assets/image/Vector.png";
import blanja from "../../assets/image/Blanja.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formSeller, setFormSeller] = useState({
    email: "",
    password: "",
  });

  const loginSeller = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/users/login`, formSeller)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          Swal.fire({
            title: "Login Success",
            text: `Your account Success Login`,
            icon: "success",
          });
          const token = response.data.data.token;
          localStorage.setItem("token", token);
          localStorage.setItem("seller",JSON.stringify(response.data.data.seller));

          return navigate("/");

        } else {
          localStorage.setItem("email",JSON.stringify(response.data.data.seller.email));
          localStorage.setItem("fullname",JSON.stringify(response.data.data.seller.fullname));
          Swal.fire({
            title: "Login Success",
            text: `Your account have been updated`,
            icon: "success",
          });
        }
        return navigate("/");
      })
      .catch(() => {
        Swal.fire({
          title: "Login Failed",
          text: `Make sure your data is correct!`,
          icon: "warning",
        });
      });
  };
  return (

    <div>
      <div className="form-signin">
        <div className="header-login">
          <img className="mb-4 text-center" src={vektor} alt="" />
          <img className="mb-4 mt-4 ms-2" src={blanja} alt="" />
          <h1 className="mb-3 title-login">Please login with your account</h1>
        </div>

        <form onSubmit={loginSeller}>
          <div className="form-floating">
            <input type="email" name="email" id="email" onChange={(e) =>
              setFormSeller({ ...formSeller, email: e.target.value })} value={formSeller.email} className="form-control mb-3" placeholder="email" />
            <label htmlFor="floatingInput">Email Address</label>
          </div>

          <div className="form-floating">
            <input type="password" name="password" id="password" onChange={(e) =>
              setFormSeller({ ...formSeller, password: e.target.value })} value={formSeller.password} className="form-control mt-3" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="mb-4 mt-4 float-end">
            <label>Forgot password?</label>
          </div>

          <button className="w-100 btn btn-sign">Login</button>

          <label className="register mb-3 mt-4 text-danger" htmlFor="register">
            Don't have a Blanja account?
            <Link className="page-register" to="/register">
              Register
            </Link>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Login;
