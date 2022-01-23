import React from "react";
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Button } from 'react-bootstrap'
import "../assets/css/index.css";
import Img from "gatsby-image"

export default ({ data }) => {
    return (
      <>
    <Layout>
      <SEO 
        title="Horse Racing Syndicates | Newmarket Horse Racing Syndicates | Newmarket Horse Trainer | pcracing.co.uk"
        description="Looking to join an exciting horse racing syndicate in 2022? See what pcracing has to offer and join one of our new syndicates"
        keywords=""
      />
    <Row className="heroimage">
        <Col lg={12} className="heroimage">
            <h1 className="index-heading">Horse racing syndicates</h1>
            <div className="desktop-heroimage">
            <Img fluid={data.image10.childImageSharp.fluid} className="" />
            </div>
        </Col>
    </Row>
        <div className="pink-section pt-3 pb-3">
          <Container>  
            <Row>
                  <Col>
                    <h1 className="heading pt-4 pb-2 logo-font">Join one of our horse racing syndicates in 2022</h1>
                    <p className="">Join a selected group of individuals who benefit from inside information in horse performance, regular updates and communication. All shareholders will receive owners and trainers badges to the races to watch their horse run, with a complimentary lunch in the owners and trainers restaurant. You will also have the opportunity to visit the yard, and watch your hose on the gallops.</p>
                    <p>Each shareholder will receive a pro-rata share of prize money won by their horse.</p>
                    <h3 className="heading logo-font">A £1 bet on all pcracing horses in 2020 would equal £42.25 profit, imagine if you also knew the inside information.</h3>
                    <p>After the 2022-23 season, all horses will be sent to the Tattersalls sales and be sold, and the proceeds will be shared between the shareholders.</p>
                    <h3 className="heading logo-font">Why a horse racing syndicate with pcracing?</h3>
                    <p className="">Based in the legendary horse racing town of Newmarket, <span className="logo-font">Peter Charalambous</span> owner, breeder and racehorse trainer, has won over £1 million in prize money and over 200 races, with just a small string of horses. He believes the crucial element of a racehorse trainer is to “know the ability of the horse before it arrives at a racecourse. Many people like to have a bet, and it’s my job to <strong>advise them on when I think the horse is ready to win.</strong>” Our horse racing syndicates are with a select group of individuals who we pick to join us for the season.</p>
                  </Col>
              </Row>
            </Container>
          </div>
      <Container>
        <div id="syndicates">
          <h2 className="index-heading pt-4 logo-font">Racehorse syndicates available in 2022</h2>
          <Row>
          <Col lg={6} className="horse-for-sale pb-5 text-center">
              <div><Img fluid={data.image423.childImageSharp.fluid} className="apollo-hero" /></div>
              <h3 className="pt-3">2 year old colt</h3>
              <p>Lethal Force / Boonga Roogeta</p>
              <p>Only 8 of 16 shares are available for sale, with 8 being retained by Peter Charalambous.</p>
              <p className="text-danger">4 sold 6 left</p>
              <p>£10,000 per share</p>
              <Button className="pcracing-button pt-2 pb-2"><Link to="/helmet-theydon-girls/" className="pcracing-button-a">More Information</Link></Button>
            </Col>
            <Col lg={6} className="horse-for-sale pb-5 text-center">
              <div><Img fluid={data.image1.childImageSharp.fluid} className="apollo-hero" /></div>
              <h3 className="pt-3 logo-font">Apollo One</h3>
              <Button className="pcracing-button pt-2 pb-2"><Link to="/apollo-one-racehorse/" className="pcracing-button-a">More Information</Link></Button>
            </Col>
            <Col lg={6} className="horse-for-sale pb-5 text-center">
              <div><Img fluid={data.image11.childImageSharp.fluid} className="apollo-hero" /></div>
              <h3 className="pt-3">Makarios</h3>
              <Button className="pcracing-button pt-2 pb-2"><Link to="/toronado-ela-gorrie-mou/" className="pcracing-button-a">More Information</Link></Button>
            </Col>
            <Col lg={6} className="horse-for-sale pb-5 text-center">
              <div><Img fluid={data.image15.childImageSharp.fluid} className="apollo-hero" /></div>
              <h3 className="pt-3">Levendi</h3>
              <Button className="pcracing-button pt-2 pb-2 "><Link to="/toronado-ela-goog-la-mou/" className="pcracing-button-a">More Information</Link></Button>
            </Col>
          </Row>
        </div>
      </Container>

    </Layout>
    </>
  );
};

export const queryHero = graphql`
query {

  image1: file(relativePath: { eq: "Apollo-one-syndicate.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image11: file(relativePath: { eq: "three-year-old-toranado-ela-gorrie-mou-gelding.jpeg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image15: file(relativePath: { eq: "three-year-old-toranado-ela-goog-la-mou-gelding.jpeg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image16: file(relativePath: { eq: "two-year-old.jpeg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image10: file(relativePath: { eq: "home-hero.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 700 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image13: file(relativePath: { eq: "apollo-one-sun-article.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 700 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image9: file(relativePath: { eq: "ts.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image2: file(relativePath: { eq: "comingsoon.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image3: file(relativePath: { eq: "tl.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image4: file(relativePath: { eq: "tb.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image423: file(relativePath: { eq: "apollo-one-lethal-force.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }







}
`;
