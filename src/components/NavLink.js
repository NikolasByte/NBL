import React from "react";
import { Link } from "gatsby";

export default (props) => {
  return (
    <>
      {props.link === "#" && (
        <a href="#" {...props}>
          {props.children}
        </a>
      )}
      {props.link !== "#" && (
        <Link to={props.link} {...props}>
          {props.children}
        </Link>
      )}
    </>
  );
};
