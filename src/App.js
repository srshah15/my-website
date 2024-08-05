import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <h1>Syed Shah</h1>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      <div className="content">
        <section id="projects">
          <h2>Projects</h2>
          {/* Add project details here */}
        </section>
        <section id="resume">
          <h2>Resume</h2>
          {/* Add resume details here */}
        </section>
        <section id="about">
          <h2>About</h2>
          {/* Add about details here */}
        </section>
      </div>
    </div>
  );
}

export default App;
