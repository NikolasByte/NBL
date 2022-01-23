import React from "react";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import "../assets/css/index.css";
import Img from "gatsby-image";
import "../assets/css/horses.css";
import ContactForm from "../components/ContactForm";

export default ({ data }) => {
    return (
      <>
    <Layout>
      <SEO 
        title="Syndicate Horses Available | Newmarket Horse Racing Syndicates | Newmarket Horse Trainer | pcracing.co.uk"
        description="Looking to be involved in horse racing in 2022? With new horse racing syndicates available in 2022 join our exclusive syndicates"
        keywords=""
      />
    <Row className="heroimage">
        <Col lg={12} className="heroimage">
            <div className="desktop-heroimage">
            <Img fluid={data.image2.childImageSharp.fluid} className="mx-auto d-block img-fluid" />
            </div>
        </Col>
    </Row>
        <Container>  
            <div className="text-center">
                <h1 className="index-heading pt-3">Lethal Force / Boonga Roogeta</h1>
            </div>
            <Row>
                <Col lg={6}>
                  <div className="text-center pt-2 syndicate-padding">
                    <Button className="pcracing-button pt-2 pb-2"><Link to="/horseracing-syndicate-newmarket/#syndicates" className="pcracing-button-a">Back to other horses</Link></Button>
                  </div>
                    <Table bordered className="">
                        <tbody>
                        <tr>
                          <td><strong>RACE TYPE:</strong> FLAT</td>
                        </tr>
                        <tr>
                          <td><strong>AGE:</strong> 2</td>
                        </tr>
                        <tr>
                          <td><strong>DESCRIPTION:</strong> ROAN COLT</td>
                        </tr>
                        <tr>
                          <td><strong><a href="https://www.racingpost.com/profile/horse/809534/boonga-roogeta/progeny" target="_blank" rel="noreferrer">VIEW DAM PROFILE</a></strong></td>
                        </tr>
                        <tr>
                          <td><strong><a href="https://www.pedigreequery.com/" target="_blank" rel="noreferrer">VIEW PEDIGREE</a></strong></td>
                        </tr>
                        <tr>
                          <td><strong><a href="https://www.racingpost.com/" target="_blank" rel="noreferrer">VIEW RACING POST FORM</a></strong></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col lg={6} className="text-center">
                    <h2 className="logo-font">Information</h2>
                    <p className="">This 2 year old colt, is currently unnamed and is half brother to Apollo One out of 11 time winner Boonga Roogeta. Ready to run in early 2022.</p>
                    <p>Only 8 of 16 shares are available for sale, with 16 being retained by Peter Charalambous.</p>
                    <p className="text-danger">4 sold 6 left</p>
                    <p>£10,000 per share</p>
                </Col>

            </Row>
        </Container>
      <Container>
        <h1 className="index-heading pt-4 logo-font">Syndicate Information</h1>
        <Row>
          <Col lg={12}>
            <p className="">You will benefit from inside information in horse performance, regular updates and communication. All shareholders will receive owners and trainers badges to the races to watch their horse run, with a complimentary lunch in the owners and trainers restaurant. You will also have the opportunity to visit the yard, and watch your hose on the gallops.</p>
            <p>Each shareholder will receive a pro-rata share of prize money won by their horse.</p>
            <p>After the 2022-23 season, all horses will sent the Tattersalls sales and be sold, and the proceeds will be shared between the shareholders.</p>
          </Col>
          <Col lg={12}>
            <h2 className="logo-font">Contact us for more information</h2>
            <p>If you would like some additional information, please use the contact form below to reach out to a member of the team.</p>
            <ContactForm/>
          </Col>
        </Row>
      </Container>
    </Layout>
    </>
  );
};

export const queryHero = graphql`
query {

  image10: file(relativePath: { eq: "home-hero.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 700 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image16: file(relativePath: { eq: "two-year-old.jpeg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 1000 ) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
  image2: file(relativePath: { eq: "apollo-one-lethal-force.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 1000 ) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
}
`;
