import React from "react";
import Axios from "axios"
import "../styles/Users.css";

export default function LogIn() {
    return (
        <div id="user-splash">
            <a href="/" id="logo">
                <img
                    src={require("../assets/img/gpc_logo@2x.png")}
                    alt="Rapptr Hero"
                    width="200px"
                />
            </a>

            <div id="users">
                <div id="nav">
                    <h3>
                        <a href="/signup" id="inactive">
                            Sign Up
                        </a>
                        <a href="/login" id="active">
                            Login
                        </a>
                    </h3>
                </div>
                <input type="text" id="email" placeholder="Email" />

                <input type="text" id="password" placeholder="Password" />

                <button id="submit" onClick={ () => handleSubmit() }>LOGIN</button>
                <div id="success"></div>
            </div>
        </div>
    );
}

function handleSubmit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    Axios.post("http://dev.rapptrlabs.com/Tests/scripts/user-login.php", {
        "password": password,
        "email": email
    })
        .then(function (response) {
            document.getElementById("success").innerHTML = response;
            console.log(response)
        })
        .catch(function (error) {
            document.getElementById("success").innerHTML = error;
            console.log(error)
        });
}
