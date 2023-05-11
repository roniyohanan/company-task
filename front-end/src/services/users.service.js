/* eslint-disable max-len */
import { HttpClient } from '../http.client';
import config from '../config';

const url = `${config.backend_service.hostname}${config.backend_service.endpoints.users}`;

class UsersService {
  static getByUserName(userName) {
    return HttpClient.get(`${url}/${userName}`, null);
  }

  static updateCredit(userName) {
    return HttpClient.put(`${url}/${userName}`, null);
  }

}

export default UsersService;
