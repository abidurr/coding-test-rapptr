import "../styles/Landing.css";

import React from "react";

export default function Landing() {
    return (
        <div id="splash">
            <div id="login"><h4>Login</h4></div>

            <div id="hero">
                <img 
                    src="../assets/img/gpc_logo_large@2x.png"
                    alt="Rapptr Hero"
                />
                <h1>APP DESIGN & DEVELOPMENT AGENCY</h1>
            </div>
        </div>
    );
}
