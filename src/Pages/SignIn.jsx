import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from  "../Components/Footer"
import { Link } from "react-router-dom";

export default function SignIn() {
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

  const emailRef =useRef(null);
  const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



  useEffect(() =>{
    emailRef.current?.focus();
  },[])
  

  const handleSubmit =(e) =>{
    e.preventdefault()

    if(!email.trim()){
      alert("Email is required");
      return;
    }

    if(!emailPattern.test(email)){
      alert("Please enter a valid email");
      return;
    }

    if(!password){
      alert("password id required ");
      return;
    }

    alert("Login Successfully!!")
    setEmail("");
    setPassword("");
    emailRef.current?.focus();

  }

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow" style={{ width: "350px" }}>
          <h3 className="text-center mb-4">Sign In</h3>

          <form  onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Email</label>
              <input ref={emailRef} type="email"
              className="form-control"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
               />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input type={showPassword ? "text" : "password"}  className="form-control" 
              placeholder="Enter password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
              </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit" className="btn btn-danger w-100 rounded-pill">Sign In</button>
          </form>

          <div className="text-center mt-3">
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => alert("Redirect to forgot password")}
            >
              Forgot password?
            </button>
            <br />
            <small>
              New here?{" "}
              <Link to="/signup" className="text-decoration-underline">
                Create account
              </Link>
            </small>
          </div>
        </div>
      </div>
      <Footer />
    </>
    
  );
  
}
