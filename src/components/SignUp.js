import React from "react";
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
                        <a href="/signup" id="active">Sign Up</a>
                        <a href="/login" id="inactive">Login</a>
                    </h3>
                </div>

                <input
                    type="text"
                    className="user-input"
                    id="username"
                    placeholder="Username"
                />

                <input type="text" id="email" placeholder="Email" />

                <input type="text" id="password" placeholder="Password" />

                <button id="submit">SIGN UP</button>
            </div>
        </div>
    );
}
