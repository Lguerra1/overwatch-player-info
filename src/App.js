import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class Odub extends Component {
  state = {
    username: '',
    portrait: ''
  }

  componentDidMount() {
    axios.get(`http://overwatchy.com/profile/pc/us/Inphinion-1371`).then(res => {
      console.log(res)
      this.setState({
        username: res.data.username,
        portrait: res.data.portrait
      })
    })
  }
  render() {

    return (
      <div>
        <img src={this.state.portrait}></img>
        {this.state.username}
      </div>
    )
  }
}
