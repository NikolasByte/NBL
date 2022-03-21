import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../assets/css/index.css";
import { Col, Container, Row, Button, Table, Accordion,} from 'react-bootstrap'
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";


//frame1.$('timeform-trainer-holder').style.border = '1px solid #000000';

export default ({ data }) => {
  return (
    <>
  <Layout>
    <SEO 
      title="Norfolk Basketball league"
      description="Local league results for the Norfolk basketball league"
      keywords=""
    />
    <Container>
      <br></br>
      <div></div>
      <div className="text-center" >
        <h1 className="">Norfolk Basketball League</h1>
        <h2>Mens Division 1 League Table</h2>
      </div>
      <div className="table-responsive">
        <Table bordered hover>
          <thead>
            <tr>
                <th> Team</th>
                <th> GP</th>
                <th> W</th>
                <th> D</th>
                <th> L</th>
                <th> GF</th>
                <th> GA</th>
                <th> GD</th>
                <th> P</th>
            </tr>
            </thead>
            <tbody>
            <tr class="one">
                <td>Lions</td>
                <td>6</td>
                <td>6</td>
                <td>0</td>
                <td>0</td>
                <td>514</td>
                <td>329</td>
                <td>185</td>
                <td>12</td>
            </tr>
            <tr class="three">
                <td>Reepham</td>
                <td>6</td>
                <td>4</td>
                <td>0</td>
                <td>2</td>
                <td>444</td>
                <td>370</td>
                <td>74</td>
                <td>10</td>
            </tr>
            <tr class="two">
                <td>Eagles</td>
                <td>5</td>
                <td>3</td>
                <td>0</td>
                <td>2</td>
                <td>330</td>
                <td>287</td>
                <td>43</td>
                <td>8</td>
            </tr>
            <tr class="four">
                <td>UEA 1</td>
                <td>6</td>
                <td>1</td>
                <td>0</td>
                <td>5</td>
                <td>297</td>
                <td>474</td>
                <td>-177</td>
                <td>6</td>
            </tr>
            <tr class="four">
                <td>Beccles</td>
                <td>5</td>
                <td>0</td>
                <td>0</td>
                <td>5</td>
                <td>262</td>
                <td>387</td>
                <td>-125</td>
                <td>5</td>
              </tr>
          </tbody>
        </Table>
{/*         <h2>League Results</h2>
        <Table bordered>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Score</th>
            <th>Score</th>
            <th>Away Team</th>
          </tr>
        </thead>
            <tbody>
              <td>Lions</td>
              <td>75</td>
              <td>68</td>
              <td>Eagles</td>
            </tbody>
        </Table> */}

      </div>
      <div className="text-center" >
        <h2>Mens Division 2 League Table</h2>
      </div>
      <div className="table-responsive">
      <Table bordered hover>
        <tr>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>P</th>
        </tr>
        <tr class="one">
            <td>UEA 2</td>
            <td>8</td>
            <td>7</td>
            <td>0</td>
            <td>1</td>
            <td>571</td>
            <td>423</td>
            <td>148</td>
            <td>15</td>
        </tr>
        <tr class="four">
            <td>Lions 2</td>
            <td>6</td>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>437</td>
            <td>242</td>
            <td>195</td>
            <td>12</td>
        </tr>
        <tr class="four">
            <td>Beccles 2</td>
            <td>7</td>
            <td>4</td>
            <td>0</td>
            <td>3</td>
            <td>380</td>
            <td>428</td>
            <td>-48</td>
            <td>11</td>
        </tr>

        <tr class="three">
            <td>Cromer</td>
            <td>9</td>
            <td>2</td>
            <td>0</td>
            <td>7</td>
            <td>460</td>
            <td>591</td>
            <td>-131</td>
            <td>11</td>
        </tr>
        <td>Eagles 2</td>
            <td>8</td>
            <td>2</td>
            <td>0</td>
            <td>6</td>
            <td>409</td>
            <td>483</td>
            <td>-74</td>
            <td>10</td>
        <tr class="two">
            <td>Great Yarmouth</td>
            <td>8</td>
            <td>2</td>
            <td>0</td>
            <td>6</td>
            <td>465</td>
            <td>555</td>
            <td>-90</td>
            <td>10</td>
        </tr>
        <tr class="four">

        </tr>

      </Table>
    </div>
    <div className="text-center" >
        <h2>Womens Division 1 League Table</h2>
      </div>
      <div className="table-responsive">
      <Table bordered hover>
        <tr>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>P</th>
        </tr>
        <tr class="four">
            <td>Saints</td>
            <td>8</td>
            <td>7</td>
            <td>0</td>
            <td>1</td>
            <td>608</td>
            <td>252</td>
            <td>356</td>
            <td>15</td>
        </tr>
        <tr class="four">
            <td>UEA 1</td>
            <td>8</td>
            <td>7</td>
            <td>0</td>
            <td>1</td>
            <td>555</td>
            <td>270</td>
            <td>285</td>
            <td>15</td>
        </tr>
        <tr class="four">
            <td>Cambridge</td>
            <td>8</td>
            <td>6</td>
            <td>0</td>
            <td>2</td>
            <td>495</td>
            <td>246</td>
            <td>249</td>
            <td>14</td>
        </tr>
        <tr class="four">
            <td>Devils</td>
            <td>11</td>
            <td>4</td>
            <td>0</td>
            <td>7</td>
            <td>334</td>
            <td>712</td>
            <td>-377</td>
            <td>14</td>
        </tr>
        <tr class="four">
            <td>Bury St Edmunds</td>
            <td>8</td>
            <td>5</td>
            <td>0</td>
            <td>3</td>
            <td>515</td>
            <td>337</td>
            <td>178</td>
            <td>13</td>
        </tr>
        <tr class="four">
            <td>Notre Dame</td>
            <td>11</td>
            <td>2</td>
            <td>0</td>
            <td>9</td>
            <td>421</td>
            <td>731</td>
            <td>-310</td>
            <td>13</td>
        </tr>
        <tr class="four">
            <td>UEA 2</td>
            <td>8</td>
            <td>0</td>
            <td>0</td>
            <td>8</td>
            <td>256</td>
            <td>637</td>
            <td>-381</td>
            <td>8</td>
        </tr>
      </Table>
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
