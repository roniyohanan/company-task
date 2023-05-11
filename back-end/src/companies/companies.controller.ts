import { Request, Response } from 'express';
import { CompaniesManager } from './companies.manager';

export class CompaniesController {
  static getAll(req: Request, res: Response): void {
    res.json(CompaniesManager.getAll());
  }

  static getCompanyData(req: Request, res: Response): void {
    res.json(CompaniesManager.getCompanyData(req.params.companyname));
  }

}
