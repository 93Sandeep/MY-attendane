import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useUserContext } from "../context/UserContextProvider";

const Login = () => {
    const [email, setEmail] = useState("");
    const [empcode, setEmpcode] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUserContext();
    const navigate = useNavigate();

    const collectdata = () => {
        const user = {
            empcode,
            email,
            password
          };
          setUser(user);
          navigate("/employee");
     }

 
    return (
        <div className="login">
            <img src="https://codalien.com/images/new_images/codalien_black_logo.svg" width={100}/>
            <h1>Login</h1>
            <input className="inputbutton1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputbutton1" type="text" value={empcode} onChange={(e) => setEmpcode(e.target.value)} placeholder="Enter Empcode" />
            <input className="inputbutton1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <br></br>
            <br></br>
            
            <button onClick={collectdata} className="appbutton1" type="button">
        Login
      </button>
        </div>
    );
};

export default Login;