import React, { Component } from 'react';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true
    };

    this.url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    this.audio = new Audio(this.url);

    // Binding `this` to the methods
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }

  play() {
    this.setState({
      play: true,
      pause: false
    });
    this.audio.play();
  }

  pause() {
    this.setState({
      play: false,
      pause: true
    });
    this.audio.pause();
  }

  render() {
    return (
      <div className="my-6">
        <button className="btn btn-neutral" onClick={this.play}>Play</button>
        <button className="btn btn-neutral" onClick={this.pause}>Pause</button>
      </div>
    );
  }
}

export default Music;
