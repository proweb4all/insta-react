import React, { Component } from "react";
import User from "./user";
import InstaService from "../services/instaservice";
import ErrorMessage from "./errormessage";

export default class Users extends Component {
  InstaService = new InstaService();
  state = {
    users: [],
    error: false
  };
  componentDidMount() {
    this.updateUsers();
  }
  updateUsers() {
    this.InstaService.getAllUsers()
      .then(this.onUsersLoaded)
      .catch(this.onError);
  }
  onUsersLoaded = users => {
    this.setState({
      users,
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
      const { name, altname, photo, id } = item;
      return (
        <div key={id} className="user">
          <User
            photo={photo}
            altname={altname}
            name={name}
            min
            // min={id == "1" ? false : true}
          />
        </div>
      );
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <ErrorMessage />;
    }
    const items = this.renderItems(users);
    return (
      <div>
        <User
          photo="https://cdn1.flamp.ru/46947dfb3b4f79a8ec455ca53aea72ae_300_300.jpg"
          altname="I am"
          name="Monster"
        />
        <div className="users__block">{items}</div>
      </div>
    );
  }
}
