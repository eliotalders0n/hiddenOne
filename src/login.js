import {React, useState} from "react";
import ReactDOM from 'react-dom/client';

function Login(){
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    
    const Login = (b) => {
        if(username === ""){
            b = "username is empty";
            alert(b);
            b.preventDefault();
        }else{
            b = "Success";
            console.log("Username : " + username);
            alert(b + username);
        }
    }
        return(
            <div className="FirstPage">
                <h1>Login to Seller Center</h1>
                <form>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="user Name" 
                    required/>
                    <br/>

                <input 
                    type="text" 
                    id="phone" 
                    name="phonenumber"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    maxLength="10" 
                    placeholder="phone number" 
                    required/>
                    <br/>
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="password" 
                    required/>
                <button 
                    type="submit" 
                    id="sign-in-button" 
                    onClick={(event) => Login(event)}>Login</button>
                </form>
                <script src="https://www.gstatic.com/firebasejs/6.3.3/firebase-app.js"></script>
                <script src="https://www.gstatic.com/firebasejs/6.3.3/firebase-auth.js"></script>
            </div>
        );
}

export default Login;