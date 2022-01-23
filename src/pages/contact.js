import React  from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/index.css";
import ContactForm from "../components/ContactForm";


export default () => (
  <Layout>
    <SEO title="Contact | Newmarket Horse Racing Syndicates | Newmarket Horse Trainer | pcracing.co.uk" 
    description="If your looking to get in contact with pcracing then you can use our online contact form to reach a member of the team"/>
    <Container>
      <Row>
        <Col lg={6}>
          <h1 className="index-heading">Contact us</h1>
          <p>If you require any more information and would like to get in contact with pcracing.co.uk then please use the contact form on this page</p>
            <h3 className="heading">Address</h3>
            <address>
              Pond House Stables<br/>
              Church Lane<br/>
              Exning<br/>
              CB8 7HF<br/>
              Telephone<br/>
              01638 730415<br/>
              07921 858421<br/>
            </address>
          </Col>
        <Col lg={6}>
          <ContactForm/>
        </Col>
      </Row>
    </Container>
  </Layout>
  );

