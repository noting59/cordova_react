import React, { Component } from 'react';
import Navbar from './partials/navbar';
import FlashMessagesList from './flash/flashMessagesList';
import Preloader from './partials/preloader';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <FlashMessagesList />
        <Preloader />
        {this.props.children}
      </div>
    );
  }
}

export default App;
