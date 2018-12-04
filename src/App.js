import React, { Component } from 'react';
import './App.css';
import Metronome from './component/Metronome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div>
          <Metronome />
        </div>
        <p>
          Listen on &nbsp;&nbsp;
          <a
            className="App-link"
            href="https://www.apple.com/uk/itunes/music/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iTunes
          </a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            className="App-link"
            href="https://open.spotify.com/browse/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            className="App-link"
            href="https://soundcloud.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoundCloud
          </a></p>
        </header>
        
      </div>
    );
  }
}

export default App;
