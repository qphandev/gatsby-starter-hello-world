import React from 'react'
import NavBar from './NavBar'

import '../styles/global.scss';
import '../styles/home.scss';
import '../styles/project-details.scss';
import '../styles/projects.scss';

export default function Layout({children}) {
    return (
        <div className="layout">
            <NavBar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>This is footer</p>
            </footer>
        </div>
    )
}
