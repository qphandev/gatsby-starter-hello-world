import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

export default function Home({ data }) {
	console.log(data);

	return (
		<Layout>
			<section>
				<div>
					Dis is homepage

					<Img fluid={data.file.childImageSharp.fluid} />
				</div>
			</section>
		</Layout>
	)
}

export const query = graphql`
  {
    file(relativePath: {eq: "loml.jpg"}) {
      id
      childImageSharp {
        fluid {
          sizes
          src
          srcSet
		  aspectRatio
        }
      }
    }
  }
`