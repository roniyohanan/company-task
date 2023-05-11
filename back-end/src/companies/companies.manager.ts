import basicData from './companies_basic.json';
import extendedData from './companies_extended.json';

export class CompaniesManager {
  static getAll() {
    return basicData.companies;
  }

  static getCompanyData(companyName: string) {
    const data = extendedData.companies;
    const company = data.find(company => company.name === companyName);
    if (!company) throw new Error ('no more info');
    return company;
  }
}
