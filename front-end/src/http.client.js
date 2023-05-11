/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export class HttpClient {
  static async get(url, query) {
    return (
      await axios({
        method: 'get',
        url,
        params: query,
      })
    ).data;
  }

  static async put(url, data) {
    return (
      await axios({
        method: 'put',
        url,
        data,
      })
    ).data;
  }

}
