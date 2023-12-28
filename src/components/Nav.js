import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "./Nav.css";
import { useUserContext } from "../context/UserContextProvider";

const Nav = () => {
   
    const { user, setUser } = useUserContext();
    const isUserNull = user === null;

    return (
        <div>
            
            <ul className="nav-dash">
                <img className="img" src="https://codalien.com/images/logo.svg" width={100} />
                {isUserNull?"":<li><Link to="/employee">Empolyees</Link></li>}
                {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </div>
    );
}
 
export default Nav;