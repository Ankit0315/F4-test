import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './profile.css'
const Profile = () => {

    const [usr,setUsr]=useState(null);

    const navigate = useNavigate();
  

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("userDetails"));
    console.log(storedUser,accessToken)
    if (!accessToken) {
      // No access token means the user is not logged in
      navigate("/login"); // Redirect to the signup page
    }
    else{
        setUsr(storedUser)
    }
  }, [navigate]); 

  const handleLogout = () => {
    console.log("hi")
    // Clear user state and access token from local storage
    localStorage.clear();
    // localStorage.removeItem("token");
    setUsr(null);
    navigate("/login");
  };
  return (
    <div>
            <div className="hed">
                <div>Header</div>
            </div>

            <ul className="hedader">
                <li><a href="/" style={{ textDecoration: 'none', color :"white",}}>Sign up</a></li>
                <li><a href="/" style={{ textDecoration: 'none', color :"white",}}>Profile</a></li>    
            </ul>
   <br/>
   <br/>
            <hr width="100%"/>

        <div className="datashow">

            <p>Profile</p>
            {usr ? (
                <div>
            <p id="fullname">Fullname : {usr.name}</p>
            <p id="email">Email : {usr.email}</p>
            <p id="password">Password : {usr.password}</p>
            </div>
            ):( <div>
                 <p id="fullname">Fullname : </p>
            <p id="email">Email : </p>
            <p id="password">Password </p>
            </div>)}
            
            <button id="button" onClick={handleLogout}> Logout</button>
       </div>
 </div>
  )
}

export default Profile;
