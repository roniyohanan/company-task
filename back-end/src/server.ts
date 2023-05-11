import express from 'express';
import * as http from 'http';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config';
import { AppRouter } from './router';

export class Server {
  public app: express.Application;

  private server: http.Server;

  public static startServer(): Server {
    return new Server();
  }

  public closeServer(): void {
    this.server.close();
  }

  private constructor() {
    this.app = express();
    this.configurationMiddleware();
    this.app.use(AppRouter);
    this.server = this.app.listen(config.server.port, () => {
      console.log(`${config.server.name} listening on port ${config.server.port}`);
    });
  }

  private setHeaders = (_req: express.Request, res: express.Response,
    next: express.NextFunction): void => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type');

    return next();
  };

  private configurationMiddleware(): void {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(this.setHeaders);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}
