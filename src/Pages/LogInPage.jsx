import React, { useState } from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";
import axios from 'axios'

const LogInPage = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [path, setPath] = useState("/")
  

  const submit = ()=>{
    axios.get(`https://log-in-system-backend.onrender.com/findUserName?name=${name}&pass=${pass}`)
    .then(res=>{
      if(res.data === "find user name"){
        
        setPath("/users")
      }else{
        
      }
    })
  }

  return (
    <div className="login-page">
      <div className="first-section">
        <h1>Log In</h1>
      

      </div>
      {/* first-section */}

      <div className="second-section">
        <div className="input-section">
          <input
            type="text"
            placeholder="User name"
            onChange={(e) => {
              e.preventDefault();
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="User password"
            onChange={(e) => {
              e.preventDefault();
              setPass(e.target.value);
            }}
          />
        </div>
        {/* input-section */}

        <Link to="/singUp">Sing Up</Link>

        <div className="sub-section">
          <Link onClick={submit} to={path}>
            <button >Submit</button>
          </Link>
        </div>
        {/* sub-section */}
      </div>
      {/* second-section */}
    </div>
    // login-page
  );
};

export default LogInPage;
