import React, { Component } from "react";

class Media extends Component {
  render() {
    return (
      <a href={this.props.url} rel="noopener" target="_blank">
        <img src={this.props.src} alt={this.props.alt} style={{borderRadius: '10px'}}></img>
      </a>
    );
  }
}

export default Media;