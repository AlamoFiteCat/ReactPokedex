import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
          <a href="https://pokeapi.co/" className="navbar-brand mb-0 h1">
            Pokédex!
          </a>
        </nav>
      </div>
    );
  }
}
