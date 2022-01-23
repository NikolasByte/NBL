import React from "react"
import { Col, Row } from 'react-bootstrap'
import Img from "gatsby-image"

const StudHorse = ({ image }) => {
  return (
    <>
    <Row className="pb-5">
        <Col lg={3} className="horse-for-sale">
        <h3 className="pt-3">Boonga Roogeta</h3>
        <div>
          <Img fluid={image} className="" />
        </div>
        </Col>
        <Col lg={3} className="horse-for-sale">
        <h3 className="pt-3">Ela Gorrie Mou</h3>
        <div><Img fluid={image} className="" /></div>
        </Col>
        <Col lg={3} className="horse-for-sale">
        <h3 className="pt-3">Ela Googla Mou</h3>
        <div><Img fluid={image} className="" /></div>
        </Col>
        <Col lg={3} className="horse-for-sale">
        <h3 className="pt-3">Kalon Brama</h3>
        <div><Img fluid={image} className="" /></div>
        </Col>
    </Row>
  </>
  );
};

export default StudHorse;
