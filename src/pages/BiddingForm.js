import React from "react";
import NavbarComponent from "../Components/Navbar.js";
import Bidform from "../Components/BidForm.js";
import "../stylesheets/BiddingForm.css";
function BiddingForm(){
    return(
        <div id="container">
            <div id="navbar">
                <NavbarComponent />
            </div>
            <div id="body">
                <div id="bidform" className="column" >
                    <Bidform />
                </div>
            </div>
        </div>
    );
}
export default BiddingForm;