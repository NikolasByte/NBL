import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/img/NBL.png";
import { Button, Modal } from "react-bootstrap";
import "../assets/css/Navigation.css";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menuItems from "../data/menuitems.json";
import { Link } from "gatsby";
import CallBackForm from "../components/CallBackForm";

export default () => {
  const [menuOpen, toggleMenu] = useState(false);
  const [subItem, toggleSubItem] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar">
      <div className="menu-branding">
        <Link to="/">
          <img
            src={logo}
            className="d-inline-block align-top left-space epic-dev-logo"
            alt=""
          />
        </Link>
      </div>

      {/* <div className="menu-toggle">
        <div
          onClick={() => (menuOpen ? toggleMenu(false) : toggleMenu(true))}
          className={`animated-icon1 ${menuOpen ? "open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}

      {/* <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${subItem === index ? "active" : ""} `}
          >
            <Link
              className="nav-link"
              activeClassName="nav-link active"
              exact={true}
              to={item.subitems ? "#" : item.url}
              onClick={() => {
                subItem === index ? toggleSubItem(null) : toggleSubItem(index);
                item.subitems ? toggleMenu(true) : toggleMenu(false);
              }}
            >
              {item.name}
              {item.subitems && (
                <>
                  <FontAwesomeIcon icon={faCaretDown} />
                </>
              )}
            </Link>
            {item.subitems && (
              <div
                className={`dropdown-content${
                  subItem === index ? " show" : ""
                }`}
              >
                {item.subitems.map((subitem, index) => (
                  <div key={index} className="sub-item">
                    <Link
                      activeClassName="nav-link active"
                      exact={true}
                      to={subitem.url}
                      onClick={() => {
                        toggleMenu(false);
                        toggleSubItem(null);
                      }}
                      className={`nav-link ${
                        subitem.class ? subitem.class : ""
                      }`}
                    >
                      {subitem.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="nav-item">
          <Button className="pcracing-button" onClick={handleShow}>Request Callback</Button>
      </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <CallBackForm handleClose={handleClose} />
      </Modal>
      */}
    </div> 
  );
};
