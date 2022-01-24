/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InvestmentWarning from "../components/InvestmentWarning";
import CookieConsent from "react-cookie-consent";


import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
 
        <Navigation/>
        <main>{children}</main>
        <CookieConsent
          location="bottom"
          buttonText="Dimiss"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          >
            This website uses cookies to enhance the user experience.{" "}
          </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
