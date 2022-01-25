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
                <td>5</td>
                <td>5</td>
                <td>0</td>
                <td>0</td>
                <td>411</td>
                <td>286</td>
                <td>125</td>
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
            <tr class="three">
                <td>Reepham</td>
                <td>5</td>
                <td>3</td>
                <td>0</td>
                <td>2</td>
                <td>348</td>
                <td>326</td>
                <td>22</td>
                <td>8</td>
            </tr>
            <tr class="four">
                <td>UEA 1</td>
                <td>4</td>
                <td>0</td>
                <td>0</td>
                <td>4</td>
                <td>197</td>
                <td>319</td>
                <td>-122</td>
                <td>4</td>
            </tr>
            <tr class="four">
                <td>Beccles</td>
                <td>3</td>
                <td>0</td>
                <td>0</td>
                <td>3</td>
                <td>166</td>
                <td>234</td>
                <td>-68</td>
                <td>3</td>
              </tr>
          </tbody>
        </Table>
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
        <tr class="four">
            <td>Lions 2</td>
            <td>4</td>
            <td>4</td>
            <td>0</td>
            <td>0</td>
            <td>293</td>
            <td>151</td>
            <td>142</td>
            <td>8</td>
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
            <td>Beccles 2</td>
            <td>4</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>210</td>
            <td>245</td>
            <td>-35</td>
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
      </Table>
    </div>
    <div className="text-center" >
        <h2>Ladies Division 1 League Table</h2>
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
            <td>Bury St Edmunds</td>
            <td>5</td>
            <td>3</td>
            <td>0</td>
            <td>2</td>
            <td>328</td>
            <td>198</td>
            <td>130</td>
            <td>8</td>
        </tr>
        <tr class="four">
            <td>Saints</td>
            <td>4</td>
            <td>3</td>
            <td>0</td>
            <td>1</td>
            <td>247</td>
            <td>148</td>
            <td>99</td>
            <td>7</td>
        </tr>
        <tr class="four">
            <td>Devils</td>
            <td>5</td>
            <td>2</td>
            <td>0</td>
            <td>3</td>
            <td>167</td>
            <td>348</td>
            <td>-181</td>
            <td>7</td>
        </tr>
        <tr class="four">
            <td>UEA 1</td>
            <td>3</td>
            <td>3</td>
            <td>0</td>
            <td>0</td>
            <td>211</td>
            <td>86</td>
            <td>125</td>
            <td>6</td>
        </tr>
        <tr class="four">
            <td>Notre Dame</td>
            <td>4</td>
            <td>1</td>
            <td>0</td>
            <td>3</td>
            <td>152</td>
            <td>231</td>
            <td>-79</td>
            <td>5</td>
        </tr>
        <tr class="four">
            <td>UEA 2</td>
            <td>5</td>
            <td>0</td>
            <td>0</td>
            <td>5</td>
            <td>148</td>
            <td>403</td>
            <td>-255</td>
            <td>5</td>
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
