import { Router } from 'express';

import GlobalMiddleware from './app/middlewares/GlobalMiddleware';
import ProjectMiddleware from './app/middlewares/ProjectMiddleware';

import ProjectController from './app/controllers/ProjectController';
import TaskController from './app/controllers/TaskController';

const routes = new Router();

routes.use(GlobalMiddleware);

routes.get('/projects', ProjectController.index);
routes.post('/projects', ProjectController.store);
routes.put('/projects/:id', ProjectMiddleware, ProjectController.update);
routes.delete('/projects/:id', ProjectMiddleware, ProjectController.destroy);

routes.post('/projects/:id/tasks', ProjectMiddleware, TaskController.store);

export default routes;
