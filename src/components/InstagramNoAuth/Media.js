import React, { Component } from "react";
import styles from './media.module.css'
class Media extends Component {
  render() {
    return (
      <a href={this.props.url} rel="noopener" target="_blank">
        <img src={this.props.src} alt={this.props.alt} style={{borderRadius: '10px'}} className={styles.photo}></img>
      </a>
    );
  }
}

export default Media;