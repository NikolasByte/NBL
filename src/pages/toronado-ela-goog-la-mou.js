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
            <Img fluid={data.image15.childImageSharp.fluid} className="mx-auto d-block img-fluid" />
            </div>
        </Col>
    </Row>
        <Container>  
            <div className="text-center">
                <h1 className="index-heading pt-3">Levendi</h1>
            </div>
            <Row>
                <Col lg={6}>
                  <div className="text-center pt-2 syndicate-padding">
                    <Button className="pcracing-button pt-2 pb-2"><Link to="/horseracing-syndicate-newmarket/#syndicates" className="pcracing-button-a">Back to other horses</Link></Button>
                  </div>
                    <Table bordered className="">
                      <tbody>
                        <tr>
                          <td><strong>RACE TYPE:</strong> FLAT / JUMP</td>
                        </tr>
                        <tr>
                          <td><strong>AGE:</strong> 3</td>
                        </tr>
                        <tr>
                          <td><strong>DESCRIPTION:</strong> BAY GELDING</td>
                        </tr>
                        <tr>
                          <td><strong><a href="https://www.racingpost.com/profile/horse/824216/ela-goog-la-mou/form" target="_blank" rel="noreferrer">VIEW DAM PROFILE</a></strong></td>
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
                    <p className="">Medium sized 3 year old gelding, should be winning soon.</p>
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
            <Col lg={6}>
                <p>Add uploaded video of Apollo One walking</p>
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
  image15: file(relativePath: { eq: "three-year-old-toranado-ela-goog-la-mou-gelding.jpeg" }) {
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
