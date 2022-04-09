import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'

export default function Projects({ data }) {

    const projects = data.allMarkdownRemark.nodes;

    return (
        <Layout>
            <div className='projects'>
                {
                    projects.map((project, index) => {
                        return (
                            <Link to={`projects/${project.frontmatter.slug}`} key={project.id}>
                                <div>
                                    <h3>{project.frontmatter.title}</h3>
                                    <p>{project.frontmatter.stack}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
        }
        id
      }
    }
  }
`