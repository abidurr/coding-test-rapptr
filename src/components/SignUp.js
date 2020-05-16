import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../styles/Users.css";

export default function LogIn() {
    return (
        <div id="user-splash">
            <Link to="/" id="logo">
                <img
                    src={require("../assets/img/gpc_logo@2x.png")}
                    alt="Rapptr Hero"
                    width="200px"
                />
            </Link>

            <div id="users">
                <div id="nav">
                    <h3>
                        <Link to="/signup" id="active">Sign Up</Link>
                        <Link to="/login" id="inactive">Login</Link>
                    </h3>
                </div>

                <input type="text" id="username" placeholder="Username"/>

                <input type="email" id="email" placeholder="Email" />

                <input type="password" id="password" placeholder="Password" />

                <button id="submit" onClick={ () => handleSubmit() }>SIGN UP</button>
                <div id="success"></div>
            </div>
        </div>
    );
}


function handleSubmit() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const bodyFormData = new FormData();
    bodyFormData.set("username", username);
    bodyFormData.append("password", password);
    bodyFormData.append("email", email);

    Axios({
        method: "POST",
        url: "http://dev.rapptrlabs.com/Tests/scripts/user-signup.php",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            console.log(response)
            document.getElementById("success").innerHTML = "Sign Up Successful!";
        })
        .catch(function (error) {
            console.log(error)
            document.getElementById("success").innerHTML = JSON.parse(JSON.stringify(error.message));
        });
}