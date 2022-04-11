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
                <td>7</td>
                <td>5</td>
                <td>0</td>
                <td>2</td>
                <td>508</td>
                <td>433</td>
                <td>75</td>
                <td>12</td>
            </tr>
            <tr class="two">
                <td>Eagles</td>
                <td>6</td>
                <td>4</td>
                <td>0</td>
                <td>2</td>
                <td>411</td>
                <td>311</td>
                <td>100</td>
                <td>10</td>
            </tr>
            <tr class="four">
                <td>UEA 1</td>
                <td>7</td>
                <td>1</td>
                <td>0</td>
                <td>6</td>
                <td>357</td>
                <td>542</td>
                <td>-185</td>
                <td>8</td>
            </tr>
            <tr class="four">
                <td>Beccles</td>
                <td>6</td>
                <td>0</td>
                <td>0</td>
                <td>6</td>
                <td>289</td>
                <td>464</td>
                <td>-175</td>
                <td>6</td>
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
            <td>9</td>
            <td>8</td>
            <td>0</td>
            <td>1</td>
            <td>650</td>
            <td>462</td>
            <td>188</td>
            <td>17</td>
        </tr>
        <tr class="four">
            <td>Lions 2</td>
            <td>8</td>
            <td>8</td>
            <td>0</td>
            <td>0</td>
            <td>555</td>
            <td>293</td>
            <td>262</td>
            <td>16</td>
        </tr>
        <tr class="four">
            <td>Beccles 2</td>
            <td>8</td>
            <td>4</td>
            <td>0</td>
            <td>4</td>
            <td>431</td>
            <td>516</td>
            <td>-85</td>
            <td>12</td>
        </tr>
        <tr>
        <td>Eagles 2</td>
            <td>10</td>
            <td>2</td>
            <td>0</td>
            <td>8</td>
            <td>448</td>
            <td>582</td>
            <td>-134</td>
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
            <td>11</td>
            <td>10</td>
            <td>0</td>
            <td>1</td>
            <td>828</td>
            <td>376</td>
            <td>432</td>
            <td>21</td>
        </tr>
        <tr class="four">
            <td>UEA 1</td>
            <td>11</td>
            <td>9</td>
            <td>0</td>
            <td>2</td>
            <td>782</td>
            <td>403</td>
            <td>379</td>
            <td>20</td>
        </tr>
        <tr class="four">
            <td>Cambridge</td>
            <td>10</td>
            <td>8</td>
            <td>0</td>
            <td>2</td>
            <td>669</td>
            <td>299</td>
            <td>370</td>
            <td>18</td>
        </tr>
        <tr class="four">
            <td>Bury St Edmunds</td>
            <td>12</td>
            <td>6</td>
            <td>0</td>
            <td>6</td>
            <td>697</td>
            <td>557</td>
            <td>140</td>
            <td>18</td>
        </tr>
        <tr class="four">
            <td>Devils</td>
            <td>12</td>
            <td>4</td>
            <td>0</td>
            <td>8</td>
            <td>356</td>
            <td>812</td>
            <td>-456</td>
            <td>14=5</td>
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
            <td>11</td>
            <td>0</td>
            <td>0</td>
            <td>11</td>
            <td>351</td>
            <td>906</td>
            <td>-555</td>
            <td>11</td>
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
