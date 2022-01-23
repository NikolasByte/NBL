import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/css/index.css";
import { Col, Container, Row, Button, Table} from 'react-bootstrap'
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
      title="Norfolk Basketball league Scores"
      description=""
      keywords=""
    />
    <Container>
    <h1>Norfolk Basketball League Division 1 </h1>
      <h2>League Table</h2>
      <Table bordered hover>
        <thead>
    <tr>
        <th>Team Name</th>
        <th>GP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>GP</th>
    </tr>
    </thead>
    <tbody>
    <tr class="one">
        <td>UEA 2</td>
        <td>4</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>309</td>
        <td>206</td>
        <td>103</td>
        <td>8</td>
    </tr>
    <tr class="two">
        <td>Great Yarmouth</td>
        <td>5</td>
        <td>2</td>
        <td>0</td>
        <td>3</td>
        <td>315</td>
        <td>353</td>
        <td>-38</td>
        <td>7</td>
    </tr>
    <tr class="three">
        <td>Cromer</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td>5</td>
        <td>315</td>
        <td>434</td>
        <td>-119</td>
        <td>7</td>
    </tr>
    <tr class="four">
        <td>Lions 2</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>225</td>
        <td>119</td>
        <td>106</td>
        <td>6</td>
    </tr>
    <tr class="four">
        <td>Eagles 2</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td>4</td>
        <td>266</td>
        <td>319</td>
        <td>-53</td>
        <td>6</td>
    </tr>
    <tr class="four">
        <td>Beccles 2</td>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>1</td>
        <td>178</td>
        <td>177</td>
        <td>1</td>
        <td>5</td>
    </tr>
    </tbody>
    </Table>
      <h2>Recent Results</h2>
      <br></br>
      <br></br>
      <h1>Norfolk Basketball League Division 2 </h1>
      <h2>League Table</h2>
      <Table>
    <tr>
        <th>Team Name</th>
        <th>GP</th>
        <th>W</th>
        <th>D</th>
        <th>L</th>
        <th>GF</th>
        <th>GA</th>
        <th>GD</th>
        <th>GP</th>
    </tr>
    <tr class="one">
        <td>UEA 2</td>
        <td>4</td>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>309</td>
        <td>206</td>
        <td>103</td>
        <td>8</td>
    </tr>
    <tr class="two">
        <td>Great Yarmouth</td>
        <td>5</td>
        <td>2</td>
        <td>0</td>
        <td>3</td>
        <td>315</td>
        <td>353</td>
        <td>-38</td>
        <td>7</td>
    </tr>
    <tr class="three">
        <td>Cromer</td>
        <td>6</td>
        <td>1</td>
        <td>0</td>
        <td>5</td>
        <td>315</td>
        <td>434</td>
        <td>-119</td>
        <td>7</td>
    </tr>
    <tr class="four">
        <td>Lions 2</td>
        <td>3</td>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>225</td>
        <td>119</td>
        <td>106</td>
        <td>6</td>
    </tr>
    <tr class="four">
        <td>Eagles 2</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td>4</td>
        <td>266</td>
        <td>319</td>
        <td>-53</td>
        <td>6</td>
    </tr>
    <tr class="four">
        <td>Beccles 2</td>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>1</td>
        <td>178</td>
        <td>177</td>
        <td>1</td>
        <td>5</td>
    </tr>
    </Table>
      <h2>Recent Results</h2>
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
