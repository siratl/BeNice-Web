import React from 'react';
import './App.css';
import { Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header" />

      <div className="App-content">
        <section className="header">
          <h1>BNE Island</h1>
          <nav>HOME</nav>
        </section>

        <section className="content">
          <h3>Nature | Nurture | Growth</h3>
          <p>
            Welcome to the BNE Island. The one stop shop for everything BeNice
            Essentials, your newest obsession.
          </p>
          <p>Please select a branch to visit below.</p>
        </section>

        <section className="button-Btn">
          <Button
            href="https://www.beniceessentials.com"
            target="_blank"
            id="isActive"
            color="primary"
            size="2x"
          >
            Shop Now
          </Button>
          <Button
            href="https://www.facebook.com/beniceessentials/"
            target="_blank"
            id="isActive"
            color="primary"
            size="2x"
          >
            Facebook
          </Button>
          <Button
            href="https://www.instagram.com/beniceessentials/"
            target="_blank"
            id="isActive"
            color="primary"
            size="2x"
          >
            Instagram
          </Button>
          <Button id="tooltip" color="secondary" size="2x" disabled>
            Blog
            <span class="tooltiptext">Coming soon!</span>
          </Button>
        </section>
      </div>

      <footer className="footer-content">
        <p>&copy; Copyright 2019 BeNice Essentials - All Right Reserved</p>
      </footer>
    </div>
  );
}

export default App;
