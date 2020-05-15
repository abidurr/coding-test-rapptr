import "../styles/Landing.css";

import React from "react";

export default function Landing() {
    return (
        <div>
            <div id="splash">
                <div id="login">
                    <h4>Login</h4>
                </div>

                <div id="hero">
                    <img
                        src={require("../assets/img/gpc_logo@2x.png")}
                        alt="Rapptr Hero"
                    />
                    <h2>APP DESIGN & DEVELOPMENT AGENCY</h2>
                </div>
            </div>

            <div id="who-we-are">
                <h2>WHO WE ARE</h2>
                <p>
                    Rapptr Labs is a Jerser City-based app development firm that
                    works with Fortune 500 brands, leading retailers, funded
                    startups and more to craft digital products and strategies
                    that solve business problems and frive measurable results.
                </p>
                <p>
                    We're part of your team. That means working together to meet
                    the business challanges you face. From iOS and Android to
                    emerging technologies like VR, AR and wearables, we do
                    whatever it takes to help you thrive in today's - and
                    tomorrow's - digital ecosystem.
                </p>
            </div>

            <div id="our-apps">
                <h2>OUR APPS</h2>
                <div id="app">
                <img
                    src={require("../assets/img/logo_movo@2x.png")}
                    alt="Movo"
                />
                <h5>Movo</h5>
            </div>
            <div id="app">
                <img
                    src={require("../assets/img/logo_conair@2x.png")}
                    alt="Conair WeightWatchers"
                />
                <h5>Conair WeightWatchers</h5>
            </div>
            <div id="app">
                <img
                    src={require("../assets/img/logo_tappingSolution@2x.png")}
                    alt="Tapping Solution"
                />
                <h5>Tapping Solution</h5>
            </div>
            <div id="app">
                <img
                    src={require("../assets/img/logo_goTenna@2x.png")}
                    alt="goTenna"
                />
                <h5>goTenna</h5>
            </div>
        </div>

            <div id="newsletter">
                <h2>SUBSCRIBE TO NEWSLETTER</h2>
                
            </div>

            <div id="footer">
            Site by abidur.dev
            </div>
        </div>
    );
}
