import React, { useState, useEffect } from "react";
// import { useUserContext } from "../context/UserContextProvider";
import "./Signup.css"
import { useNavigate } from "react-router-dom";


const Signup = () => {
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
        navigate("/employee")
    }
 })
  const [name, setName] = useState("");
  const [empcode, setEmpcode] = useState("");
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
  // const { setUser } = useUserContext();
  const navigate = useNavigate();
  
  const collectdata = async() => {
    let result = await fetch("http://localhost:5000/signup",{
          method:"post",
          body: JSON.stringify({name,empcode,email,password}),
          headers: {'Content-Type': 'application/json'
    },
    })

    if (!result.ok) {
      throw new Error('Failed to fetch');
    }

    // console.log(result);
    // const user = {
    //   name,
    //   empcode,
    //   email,
    //   password
    // };
    // setUser(user);
    result = await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result));
    navigate("/employee");
   }
    
    return (
      <div className="signup">
        <img src="https://codalien.com/images/new_images/codalien_black_logo.svg" width={100}/>
            <h1>Signup-Here</h1>
        <input className="inputbutton" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        <input className="inputbutton" type="text" value={empcode} onChange={(e) => setEmpcode(e.target.value)} placeholder="Enter Empcode" />
        <input className="inputbutton" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
        <input className="inputbutton" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
        <button onClick={collectdata} className="appbutton" type="button">
        Sign Up
      </button>
        </div>
    )
};

export default Signup;