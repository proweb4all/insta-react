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
            min={id == "1" ? false : true}
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
      <>
        <div className="users__block">{items}</div>
      </>
    );
  }
  // return (
  //   <div className="right">
  //     <User
  //       photo="https://cdn2.f-cdn.com/ppic/76420944/logo/14167560/3yf40/profile_logo_.jpg"
  //       altname="Feodor"
  //       name="Feodor"
  //     />
  //     <div className="users__block">
  //       <User
  //         photo="https://a.d-cd.net/4afd96u-200.jpg"
  //         altname="Skull"
  //         name="Skull"
  //         min
  //       />
  //       <User
  //         photo="https://lastfm-img2.akamaized.net/i/u/ar0/4bd14bf41efb4e38cec00c45fbdd1849.png"
  //         altname="Panda"
  //         name="Panda"
  //         min
  //       />
  //       <User
  //         photo="https://a.d-cd.net/4afd96u-200.jpg"
  //         altname="Skull"
  //         name="Skull"
  //         min
  //       />
  //       <User
  //         photo="https://lastfm-img2.akamaized.net/i/u/ar0/4bd14bf41efb4e38cec00c45fbdd1849.png"
  //         altname="Panda"
  //         name="Panda"
  //         min
  //       />
  //     </div>
  //   </div>
  // );
}
