import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

export default function Home({ data }) {
	console.log(data);

	const { title, description, copyright } = data.site.siteMetadata;
	return (
		<Layout>
			<section>
				<div>
					Dis is homepage
					<br />
					{ title }
					<br />
					{ description }
					<br />
					{ copyright }
				</div>
			</section>
		</Layout>
	)
}

export const query = graphql`
{
  site {
	siteMetadata {
	  copyright
	  description
	  title
	}
  }
}`