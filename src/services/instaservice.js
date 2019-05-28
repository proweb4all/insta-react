export default class InstaService {
  constructor() {
    // this._apiBase = "http://localhost:3000/";
    // this._apiBase = "https://github.com/proweb4all/insta-react/blob/master/db.json";
    this._apiBase = "https://my-json-server.typicode.com/proweb4all/insta-react/";
    // this._apiBase = "/";
    
  }

  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return res.json();
  };

  getAllPosts = async () => {
    const res = await this.getResource("posts/");
    return res;
  };
  getAllUsers = async () => {
    const res = await this.getResource("posts/");
    return res.map(this._getUsersInfo);
  };
  _getUsersInfo = (post) => {
      return {
        name: post.name,
        altname: post.altname,
        photo: post.photo,
        id: post.id
      }
  }
  getAllPhotos = async () => {
    const res = await this.getResource("posts/");
    return res.map(this._transformPosts);
  };
  _transformPosts = (post) => {
      return {
          src: post.src,
          alt: post.alt,
          id: post.id
      }
  }
}
