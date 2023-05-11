import { Request, Response } from 'express';
import { UsersManager } from './users.manager';

export class UsersController {
  static getByUserName(req: Request, res: Response): void {
    res.json(UsersManager.getByUserName(req.params.username));
  }

  static updateCredit(req: Request, res: Response): void {
    res.json(UsersManager.updateCredit(req.params.username));
  }

}
