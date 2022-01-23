import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from 'react-bootstrap'
import StudHorse from "../components/stud"
import "../assets/css/index.css";

export default ({ data }) => {
  return (
    <>
  <Layout>
    <SEO title="Stud | Newmarket Horse Racing Syndicates | Newmarket Horse Trainer | pcracing.co.uk" 
    description="Learn more about the stud here at pcracing and what horses are currently available" />
    <Container>
    <h1 className="index-heading">Stud Page</h1>
    <p>More information coming soon.</p>
    <StudHorse image={data.image2.childImageSharp.fluid} ></StudHorse>
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
  image2: file(relativePath: { eq: "comingsoon.png" }) {
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
