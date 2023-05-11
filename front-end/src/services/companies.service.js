/* eslint-disable max-len */
import { HttpClient } from '../http.client';
import config from '../config';

const url = `${config.backend_service.hostname}${config.backend_service.endpoints.companies}`;

class CompaniesService {
  static getAll() {
    return HttpClient.get(url, null);
  }

  static getCompanyData(companyName) {
    return HttpClient.get(`${url}/${companyName}`);
  }
}

export default CompaniesService;
