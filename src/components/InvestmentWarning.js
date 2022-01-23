import React from "react";
import "../assets/css/investmentwarning.css"
import { Container } from "react-bootstrap";

export default () => { 
    return (
        <Container>
            <hr></hr>
            <div className="text-center pt-3 pb-3">
                <h1 className="logo-font">Shareholder and Syndicate Disclaimer</h1>
                <p>For each Shareholder you acknowledge that your partnership with pcracing is purely for the enjoyment of horse racing and not for investment purposes.</p>
            </div>
            <hr></hr>
        </Container>

    );
};