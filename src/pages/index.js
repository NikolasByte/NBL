import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/css/index.css";
import { Col, Container, Row, Button} from 'react-bootstrap'
import Img from "gatsby-image"
import { faLandmark, faIdBadge, faInfoCircle, faMoneyCheck, faPoundSign, faArrowAltCircleDown, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";


//frame1.$('timeform-trainer-holder').style.border = '1px solid #000000';

export default ({ data }) => {
  return (
    <>
  <Layout>
    <SEO 
      title="Home | Newmarket Horse Racing Syndicates | Newmarket Horse Trainer | pcracing.co.uk"
      description="New exclusive horse racing syndicates for 2022 available, learn more and become part of the exclusive club of horse ownership"
      keywords=""
    />
    <Row className="heroimage">
      <Col lg={12} className="heroimage">
        <h1 className="index-heading">Welcome to Peter Charalambous Racing</h1>
        <h2 class="index-heading">Lift off for Apollo One</h2>
        <div className="container desktop-heroimage">
        <Img fluid={data.imageApolloLingfield.childImageSharp.fluid} className="" alt="Apollo one Wins at Lingfield"/>
        </div>
        <p className="container pt-3 pb-3">Apollo One starts the 2022 season perfectly, making it three wins from five starts. With the latest race a Listed Race win. Credit: <a href="https://twitter.com/steven_cargill?lang=en">Steven Cargill</a></p>
      </Col>
    </Row>
    <Col lg={12} className="text-center pb-4"> 
        <h3 className="heading"><strong>Racing Post</strong></h3>
        <FontAwesomeIcon className="text-center pcracing-color down-arrow-small" icon={faArrowAltCircleDown} size="5x" />{" "}
        <br></br>
        <br></br>
        <br></br>
        <Button href="https://www.racingpost.com/news/liftoff-for-harley-as-apollo-one-puts-rider-back-among-winners-following-injury/476761" target="_blank" className="pcracing-button pt-3 pb-3 pcracing-button-a">Read article</Button>
      </Col>
    <Row className="heroimage">
      <Col lg={12} className="heroimage">
        <div className="desktop-heroimage">
        <Img fluid={data.image3.childImageSharp.fluid} className="container" alt="Apollo One pcracing Solario Stakes" />
        </div>
        <p className="container pt-3">Peter Charalambous's Apollo One (pink) was third in the 2020 Solario Stakes, based in Newmarket, Credit: Getty - Pool</p>
      </Col>
      </Row>
    <Container>
      <Row>
          <Col lg={12}>
            <div className="text-center">
              <h1 className="index-heading">Shares available in our 2022 Racehorse Syndicates</h1>
              <h2 className="heading pt-2 pb-2">"We backed Apollo One from 75-1 into 22-1 at Newmarket on his debut"</h2>
              <h3 className="heading pt-2 pb-2">Read what the headlines were when Apollo One started to cause a buzz in the racing world.</h3>
              <FontAwesomeIcon className="text-center pcracing-color pt-2 down-arrow" icon={faArrowAltCircleDown} size="5x" />{" "}
            </div>
          </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="text-center pt-2 pb-2"> 
              <h3 className="heading"><strong>The Sun</strong></h3>
              <Button href="https://www.thesun.co.uk/sport/horseracing/12632592/charalambous-apollo-one-doncaster-flying-scotsman/" target="_blank" className="pcracing-button pt-3 pb-3 pcracing-button-a">Read article</Button>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="text-center pt-2 pb-2">
              <h3 className="heading"><strong>Racing TV</strong></h3>
              <Button href="https://www.racingtv.com/news/apollo-one-victory-may-launch-european-adventures" target="_blank" className="pcracing-button pt-3 pb-3 pcracing-button-a">Read article</Button>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className="text-center pt-2 pb-2">
                <p className="pt-2 pb-2">Join one of Newmarket's new horse racing syndicates and benefit from inside connections just like this and much more.</p>
                <h3>Learn more</h3>
                <Button className="pcracing-button pt-3 pb-3"><Link to="/horseracing-syndicate-newmarket/" className="pcracing-button-a">Syndicate Information</Link></Button>
            </Col>
           <Col lg={12} className="pt-2"> 
            <h3 className="heading pt-3">Why choose Peter Charalambous as a racehorse trainer?</h3>
            <p className="pb-3">Based in the legendary horse racing town of Newmarket, <span className="logo-font">Peter Charalambous</span> owner, breeder and racehorse trainer, has won over £1 million in prize money and over 200 races, with just a small string of horses. He believes the crucial element of a racehorse trainer is to “know the ability of the horse before it arrives at a racecourse. Many people like to have a bet, and it’s my job to <strong>advise them on when I think the horse is ready to win.</strong>” Our horse racing syndicates are with a select group of individuals who we hand select to join us for the season.</p>
          </Col>
      </Row>
    </Container>
      <div className="pink-section pt-3 pb-3">
        <Container>
        <h2 className="index-heading pt-4 pb-3">Benefits of joining a racehorse syndicate with pcracing</h2>
          <Row>
            <Col lg={4} className="icon-col">
              <div className="index-paragraph">
                <FontAwesomeIcon icon={faInfoCircle} size="3x" />{" "}
                <h3 className="pt-2 logo-font">Racehorse Information</h3>
                <p>Up to date information on your racehorse and performance before they run</p>
                </div>
            </Col>
            <Col lg={4} className="icon-col">
              <div className="index-paragraph">
                <FontAwesomeIcon icon={faPoundSign} size="3x" />{" "}
                <h3 className="pt-2 logo-font">Prize Money</h3>
                <p>Racehorse prize money shared pro-rata on shares owned</p>
              </div>
            </Col>
            <Col lg={4} className="icon-col">
              <div className="index-paragraph">
                <FontAwesomeIcon icon={faMoneyCheck} size="3x" />{" "}
                <h3 className="pt-2 logo-font">All racehorse Fees Inclusive</h3>
                <p>Share price includes all racehorse training fees</p>
              </div>
            </Col>
            <Col lg={4} className="icon-col">
              <div className="index-paragraph">
                <FontAwesomeIcon icon={faTrophy} size="3x" />{" "}
                <h3 className="pt-2 logo-font">Share value</h3>
                <p>All racehorses will be sold at Tattersalls, with sale proceeds will be distributed pro-rata</p>
              </div>
            </Col>
            <Col lg={4} className="icon-col">
              <div className="index-paragraph">
                <FontAwesomeIcon icon={faIdBadge} size="3x" />{" "}
                <h3 className="pt-2 logo-font">Premier Owner and Trainers Badges</h3>
                <p>All shareholders will receive owners and trainers badges to the races to watch their horse run, with a complimentary lunch in the owners and trainers restaurant.</p>
              </div>
            </Col>
            <Col lg={4} className="icon-col">
              <div className="index-paragraph">
              <FontAwesomeIcon icon={faLandmark} size="3x" />{" "}
              <h3 className="pt-2 logo-font">Racehorse Stable Visits</h3>
                <p>Bring your family to the yard and watch the racehorses train on the legendary Newmarket Gallops</p>
              </div>
            </Col>
          </Row>
          <Row className="text-center pb-4 pt-2">
            <Col>
              <Button className="pcracing-button-white pt-2 pb-2"><Link to="/contact/" className="pcracing-button-a">Contact pcracing.co.uk</Link></Button>
            </Col>
          </Row>
          </Container>
          </div>
        <Container className="pb-5">
          <div className="justify-content-center">
            <Row className="important-update">
              <Col lg={12} classname="">
                  <div class="timeform-trainer-holder">
                    <h4 className="heading">Live view of recent results</h4>
                    <iframe src="https://www.timeform.com/horse-racing/widget/trainer/000000044761" frameborder="0" scrolling="no" id="frame1"></iframe>
                    <link href="https://www.timeform.com/horse-racing/content/css/trainer-jockey-widget/trainer-jockey-widget-holder.min.css" rel="stylesheet" type="text/css" />
                  </div>
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

  image1: file(relativePath: { eq: "image3.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 500 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image2: file(relativePath: { eq: "home-hero.jpg" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 700 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  image3: file(relativePath: { eq: "apollo-one-sun-article.webp" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 700 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageApolloLingfield: file(relativePath: { eq: "Apollo-One-Lingfield.webp" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fluid(maxWidth: 700 quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
