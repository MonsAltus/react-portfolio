import React from 'react';
import { Link } from 'react-router-dom';
  
export default function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
                <h1 class="navbar-brand">James Hacklander</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to='/' class="nav-link">About Me</Link>
                        <Link to='/projects' class="nav-link">Projects</Link>
                        <Link to='/contact' class="nav-link">Contact</Link>
                        <a href='./James Hacklander Resume.pdf' target='_blank' class="nav-link">Resume</a>
                    </div>
                </div>
            </div>
            </nav>
        </header>
    )
};