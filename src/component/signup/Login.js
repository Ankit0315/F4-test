import React from 'react';
import './Login.css'
import { useState,useEffect } from 'react';
import { useNavigate,Link } from "react-router-dom";


const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

const Login = () => {
 const [name,setName]=useState('');
 const[email,setEmail]=useState('');
 const[password,setPassword]=useState('');
 const[confipass,setConfipass]=useState('');
 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');
 const navigate = useNavigate();




//  useEffect(() => {
//         const accessToken = localStorage.getItem("token");
//         if (accessToken) {
//           // Access token means the user is already logged in
//           navigate("/profile"); // Redirect to the profile page
//         }
//       }, [accessToken]);


const verify=()=>{

if(name==''|| email==''|| password==''|| confipass=='')
{
setError(' Error : All the fields are mandatory mandotry')
}
else if(password!==confipass)
{
    alert("Password and confirm password are not same");
}
else
{
        
        setSuccess("Successfully Signed Up!")


const radNo=generateString(16);

const userDetails = {
    name:name,
    email:email,
    password:password
}
localStorage.setItem("userDetails", JSON.stringify(userDetails));
localStorage.setItem("token",radNo);
setTimeout(() => {
        navigate('/profile')       
}, 1000);


setName('');
setEmail('')
setPassword('');
setConfipass('');
}

}
  return (
    <div>
            <div className="hed">
                    <div>Header</div>
            </div>

            <ul className="hedader">
                <li ><Link to= "/login" style={{ textDecoration: 'none', color :"white",}}>Sign up</Link></li>
                <li ><Link to="/profile" style={{ textDecoration: 'none', color :"white",}}>Profile</Link></li>
            </ul>
    <br/>
    <br/>
            <hr style={{width:"100%"}}/>

            <div className="form">
            
            <h2 id="signup">SignUp</h2>
            <input type="text" placeholder="Full Name" id="name" required value={name}  onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <hr/>
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/> 
    <hr/>
            <input type="password" placeholder="Password" id="password" required  value={password}  onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <hr/>
            <input type="password" placeholder="Confirm Password" id="confirmpass" required value={confipass} onChange={(e)=>setConfipass(e.target.value)}/>

    <hr/>
    <br/>
            <div id="error" style={{ color :"Red",float:"left",fontSize:"25px"}}>{error}</div>
            <div id="suces"  style={{ color :"Green",float:"left"}}>{success}</div>
    <br/>
    <br/>
             <button id="btn" onClick={verify}>Sign Up</button>
</div>
    </div>
  );
}

export default Login;
