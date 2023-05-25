import React from "react";
import CollapsibleExample from "../Components/Navbar.js";
import FormDisabledExample from "../Components/BidForm.js";
import "../stylesheets/BiddingForm.css";
function BiddingForm(){
    return(
        <div id="container">
            <div id="navbar">
                <CollapsibleExample />
            </div>
            <div id="body">
                <div id="bidform">
                    <FormDisabledExample />
                </div>
            </div>
        </div>
    );
}
export default BiddingForm;