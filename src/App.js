import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class Odub extends Component {
  state = {
    username: '',
    portrait: '',
    level: '',
    quickPlayTime: '',
    levelFrame: '',
    star: ''
  }

  componentDidMount() {
    axios.get(`http://overwatchy.com/profile/pc/us/anrew-11861`).then(res => {
      console.log(res)
      this.setState({
        username: res.data.username,
        portrait: res.data.portrait,
        level: res.data.level,
        quickPlayTime: res.data.playtime.quickplay,
        levelFrame: res.data.levelFrame,
        star: res.data.star
      })
    })
  }
  render() {

    return (
      <div>
        <img src={this.state.portrait}></img>
        <img src={this.state.levelFrame}></img>
        <img src={this.state.star}></img>
        <div><p>Player Name: {this.state.username}</p></div>
        <div><p>Level: {this.state.level}</p></div>
        <div><p>Total Quickplay Time: {this.state.quickPlayTime}</p></div>
      </div>
    )
  }
}
