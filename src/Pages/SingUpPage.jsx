import "./singuppage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


const LogInPage = () => {
  const [uName, setUName] = useState();
  const [uPass, setUPass] = useState();

  const submit = () => {
    axios.post(`https://log-in-system-backend.onrender.com/addUsers?name=${uName}&pass=${uPass}`);
  };

  return (
    <div className="singup-page">
      <div className="first-section">
        <h1>Sing UP</h1>
      </div>
      {/* first-section */}

      <div className="second-section">
        <div className="input-section">
          <input
            type="text"
            placeholder="User name"
            onChange={(e) => {
              e.preventDefault();
              setUName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="User password"
            onChange={(e) => {
              e.preventDefault();
              setUPass(e.target.value);
            }}
          />
        </div>
        {/* input-section */}

        <Link to="/">Log In</Link>

        <div className="sub-section">
          <Link to="/users">
            <button onClick={submit}>Submit</button>
          </Link>
        </div>
        {/* sub-section */}
      </div>
      {/* second-section */}
    </div>
    // singup-page
  );
};

export default LogInPage;
