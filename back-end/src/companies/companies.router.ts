import { Router } from 'express';
import { CompaniesController } from './companies.controller';

const CompaniesRouter: Router = Router();

CompaniesRouter.get('/', CompaniesController.getAll);
CompaniesRouter.get('/:companyname', CompaniesController.getCompanyData);

export { CompaniesRouter };
