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
                        <Link to="/signup" id="inactive">
                            Sign Up
                        </Link>
                        <Link to="/login" id="active">
                            Login
                        </Link>
                    </h3>
                </div>
                <input type="email" id="email" placeholder="Email" />

                <input type="password" id="password" placeholder="Password" />

                <button id="submit" onClick={ () => handleSubmit() }>LOGIN</button>
                <div id="success"></div>
            </div>
        </div>
    );
}

function handleSubmit() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const bodyFormData = new FormData();
    bodyFormData.set("email", email);
    bodyFormData.append("password", password);

    Axios({
        method: "POST",
        url: "https://dev.rapptrlabs.com/Tests/scripts/user-login.php",
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
            console.log(response)
            document.getElementById("success").innerHTML = "Login Successful!";
        })
        .catch(function (error) {
            console.log(error)
            document.getElementById("success").innerHTML = JSON.parse(JSON.stringify(error.message));
        });
}
