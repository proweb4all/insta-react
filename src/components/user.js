import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <a href='#' className={(this.props.min) ? "user min" : 'user'}>
        <img src={this.props.photo} alt={this.props.altname} />
        <div className="name">{this.props.name}</div>

      </a>
    )
  }
}