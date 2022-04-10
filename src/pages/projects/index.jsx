import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import Img from "gatsby-image";

export default function Projects({ data }) {

  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className='projects'>
        {
          projects.map((project) => {
            console.log(project.frontmatter.slug);
            return (
              <Link to={`${project.frontmatter.slug}`} key={project.id}>
                <div>
                  <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                  <p>Contact: {contact}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </Layout>
  )
}

// This is how you query multiple things, just add them within the same bracket
// Also you can add a "key" of your naming before the "field"
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
          thumb {
          childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    },
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`