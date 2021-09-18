import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <h1>James Hacklander</h1>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>About me</Link>
                    </li>
                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <a href='./James-hacklander-resume.pdf' target='_blank' >Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};


