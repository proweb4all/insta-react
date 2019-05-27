import React, { Component } from "react";
import User from "./user";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src="https://cdn2.f-cdn.com/ppic/76420944/logo/14167560/3yf40/profile_logo_.jpg"
          alt="User1"
          name="Feodor"
          min
        />
        <img src={this.props.src} alt={this.props.alt} />
        <div className="post__name">{this.props.title}</div>
        <div className="post__descr">{this.props.descr}</div>
      </div>
    );
  }
}
