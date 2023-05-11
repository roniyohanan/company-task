import { Router } from 'express';
import { CompaniesRouter } from './companies/companies.router';
import { UsersRouter } from './users/users.router';

const AppRouter: Router = Router();

AppRouter.use('/api/companies', CompaniesRouter);
AppRouter.use('/api/users', UsersRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };