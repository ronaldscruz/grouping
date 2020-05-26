/**
 * Sucrase - Sucrase is a developer dependencie which will help us to do the
 * Import and export modules.
 * Nodemon - Is a livereload which will help to restart the server when we change something
 */
import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    /**
     * It serves to direct static files such as images, css and html files that
     * can be accessed directly by the browser.
     */
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
