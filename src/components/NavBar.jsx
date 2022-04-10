import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export default function NavBar() {
    const data = useStaticQuery(graphql`
    {
        site {
            siteMetadata {
                    copyright
                    description
                    title
            }
        }
    }
    `);

    const { title } = data.site.siteMetadata;

    return (
        <nav>
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}