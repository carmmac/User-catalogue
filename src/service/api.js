import axios from "axios";

const BASE_URL = `https://jsonplaceholder.typicode.com`;
const BASE_TIMEOUT = 5000;

class API {
  constructor(baseURL, timeout) {
    this._http = axios.create({
      baseURL,
      timeout,
    });
  }

  getUsers() {
    return this._load(`/users`);
  }

  getUser(id) {
    return this._load(`/users/${id}`);
  }

  async _load(url, options) {
    return await this._http
      .request({url, ...options})
      .then((response) => response.data);
  }
}

const defaultAPI = new API(BASE_URL, BASE_TIMEOUT);

export const getAPI = () => defaultAPI;
