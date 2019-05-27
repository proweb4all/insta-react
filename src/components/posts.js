import React, { Component } from "react";
import User from "./user";
import InstaService from "../services/instaservice";
import ErrorMessage from './errormessage';

export default class Posts extends Component {
  InstaService = new InstaService();
  state = {
    posts: [],
    error: false
  };
  componentDidMount() {
    this.updatePosts();
  }
  updatePosts() {
    this.InstaService.getAllPosts()
      .then(this.onPostsLoaded)
      .catch(this.onError);
  }
  onPostsLoaded = posts => {
    this.setState({
      posts,
      error: false
    });
  };
  onError = err => {
    this.setState({
      error: true
    });
  };

  renderItems(arr) {
    return arr.map(item => {
      const { name, altname, photo, src, alt, descr, id } = item;
      return (
        <div key={id} className="post">
          <User
            photo={photo}
            altname={altname}
            name={name}
            min
          />
          <img src={src} alt={alt} />
          {/* <div className="post__name">{id}</div> */}
          <div className="post__descr">{descr}</div>
        </div>
      );
    });
  }

  render() {
    const {error, posts} = this.state;
    if (error) {
      return <ErrorMessage />
    }
    const items = this.renderItems(posts);
    return (
      <div className="left">
        {items}
      </div>
    );
  }
}
