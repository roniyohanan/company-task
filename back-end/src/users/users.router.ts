import { Router } from 'express';
import { UsersController } from './users.controller';

const UsersRouter: Router = Router();

UsersRouter.get('/:username', UsersController.getByUserName);

UsersRouter.put('/:username', UsersController.updateCredit);

export { UsersRouter };
