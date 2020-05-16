import "../styles/Landing.css";
import React from "react";
import Axios from "axios";

export default function Landing() {
    return (
        <div>
            <div id="splash">
                <div id="login">
                    <a href="/login" id="link">
                        <h4>Login</h4></a>
                </div>

                <div id="hero">
                    <img
                        src={require("../assets/img/gpc_logo@2x.png")}
                        alt="Rapptr Hero"
                        width="270px"
                    />
                    <h2>APP DESIGN & DEVELOPMENT AGENCY</h2>
                </div>
            </div>

            <div id="who-we-are">
                <div id="heading">
                    <h2>WHO WE ARE</h2>
                </div>
                <div>
                    <p>
                        Rapptr Labs is a Jerser City-based app development firm that
                        works with Fortune 500 brands, leading retailers, funded
                        startups and more to craft digital products and strategies
                        that solve business problems and drive measurable results.
                </p>
                    <p>
                        We're part of your team. That means working together to meet
                        the business challanges you face. From iOS and Android to
                        emerging technologies like VR, AR and wearables, we do
                        whatever it takes to help you thrive in today's - and
                        tomorrow's - digital ecosystem.
                </p>
                </div>
            </div>

            <div id="our-apps">
                <h2>OUR APPS</h2>
                <div id="apps">
                    <div id="app">
                        <a href="https://movo.me/">
                            <img
                                src={require("../assets/img/logo_movo@2x.png")}
                                alt="Movo"
                                width="220px"
                            />
                        </a>
                        <h5>Movo</h5>

                    </div>
                    <div id="app">
                        <a href="https://apps.apple.com/us/app/ww-body-analysis-scale-tracker/id1157071126">
                            <img
                                src={require("../assets/img/logo_conair@2x.png")}
                                alt="Conair WeightWatchers"
                                width="220px"
                            /></a>
                        <h5>Conair WeightWatchers</h5>
                    </div>
                    <div id="app">
                        <a href="https://apps.apple.com/us/app/the-tapping-solution/id1419815487?mt=8">
                            <img
                                src={require("../assets/img/logo_tappingSolution@2x.png")}
                                alt="Tapping Solution"
                                width="220px"
                            />
                        </a>
                        <h5>Tapping Solution</h5>
                    </div>
                    <div id="app">
                        <a href="https://gotenna.com/">
                            <img
                                src={require("../assets/img/logo_goTenna@2x.png")}
                                alt="goTenna"
                                width="220px"
                            />
                        </a>
                        <h5>goTenna</h5>
                    </div>
                </div>
            </div>

            <div id="newsletter">
                <h2>SUBSCRIBE TO NEWSLETTER</h2>
                <div id="news-box">
                    <input type="email" placeholder="Your email" id="email-newsletter" />
                    <button onClick={() => { handleEmailSubmit() }}>SUBSCRIBE</button>
                </div>
                <div id="success"></div>
            </div>

            <div id="footer">
                <h5>Site by <a href="https://abidur.dev" id="my-site">abidur.dev</a> </h5>
            </div>
        </div>
    );
}

function handleEmailSubmit() {
    const useremail = document.getElementById("email-newsletter").value;
    Axios.post("http://dev.rapptrlabs.com/Tests/scripts/add-email.php", {
        email: useremail
    })
        .then(function (response) {
            document.getElementById("success").innerHTML = response;
        })
        .catch(function (error) {
            document.getElementById("success").innerHTML = error ;
        });
}