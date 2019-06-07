import React from 'react';
import './App.css';
import { Button } from 'reactstrap';
import headerImage from './images/the5.png';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div className="App-content">
        <section className="header">
          <h1>BNE Island</h1>
        </section>
        <div className="headerImage">
          <img src={headerImage} alt="BeNice Essentials products" />
          <section className="content">
            <h3>Nature | Nurture | Growth</h3>
            <p>
              Welcome to your newest obsession, BNE Island. Terminal for
              everything BeNice Essentials!
            </p>
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
          </section>
        </div>
      </div>
      <footer className="footer-content">
        <p>&copy; Copyright 2019 BeNice Essentials - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
