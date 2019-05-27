import React from "react";
import User from "./user";

export default function Users() {
  return (
    <div className="right">
      <User
        photo="https://cdn2.f-cdn.com/ppic/76420944/logo/14167560/3yf40/profile_logo_.jpg"
        altname="Feodor"
        name="Feodor"
      />
      <div className="users__block">
        <User
          photo="https://a.d-cd.net/4afd96u-200.jpg"
          altname="Skull"
          name="Skull"
          min
        />
        <User
          photo="https://lastfm-img2.akamaized.net/i/u/ar0/4bd14bf41efb4e38cec00c45fbdd1849.png"
          altname="Panda"
          name="Panda"
          min
        />
        <User
          photo="https://a.d-cd.net/4afd96u-200.jpg"
          altname="Skull"
          name="Skull"
          min
        />
        <User
          photo="https://lastfm-img2.akamaized.net/i/u/ar0/4bd14bf41efb4e38cec00c45fbdd1849.png"
          altname="Panda"
          name="Panda"
          min
        />
      </div>
    </div>
  );
}
