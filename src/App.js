import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />

          <Route exact path='/' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />

      </BrowserRouter>
    </main>
  )
};
