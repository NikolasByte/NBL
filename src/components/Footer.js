import React from "react";
import "../assets/css/footer.css";
// import { Social } from "../Components/Social";
import { Col, Row } from "react-bootstrap";
import { Link } from "gatsby";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div id="footer" className="snap-scroll-el">
      <div className="footer-container">
        <Row>
          <Col sm="12" lg="4" className="footer-left footer-section">
            <ul className="footer-list">
              <li>
                <address>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                  <strong>Newmarket</strong>
                </address>
              </li>
            </ul>
          </Col>
          <Col sm="12" lg="4" className="text-center footer-section">
            <ul className="footer-list two-columns">
              <li>
                <Link to="/" exact={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/horseracing-syndicate-newmarket/" exact={true}>
                  Syndicates
                </Link>
              </li>
              <li>
                <Link to="/stud/" exact={true}>
                  Stud
                </Link>
              </li>
              <li>
                <Link to="/contact/" exact={true}>
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm="12" lg="4" className="footer-right footer-section">
            <ul className="footer-list">
              <li>
                <Link to="/privacy-policy/" exact={true}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;