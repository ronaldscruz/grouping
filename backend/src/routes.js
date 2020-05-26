import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import PostController from './app/controllers/PostController';
import GroupController from './app/controllers/GroupController';
import RoadMapController from './app/controllers/RoadMapController';
import LikeController from './app/controllers/LikeController';
import MensageGroupController from './app/controllers/MensageGroupController';

import authMiddleware from './app/middlewares/auth';
import gameMiddleware from './app/middlewares/gamePoints';


const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.use(gameMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/provider', ProviderController.index);

routes.post('/posts',PostController.store);
routes.get('/posts/:category',PostController.index);
routes.get('/posts/info/:postId',PostController.indexId);
routes.post('/posts/addRoadMap',PostController.addToRoad);

routes.post('/likes',LikeController.store);
routes.delete('/likes/:postId',LikeController.delete);

routes.post('/groups',GroupController.store);
routes.get('/groups/:category',GroupController.index);

routes.post('/mensages',MensageGroupController.store);
routes.get('/mensages/:groupId',MensageGroupController.index);

routes.post('/roadmaps',RoadMapController.store);
routes.get('/roadmaps/:category',RoadMapController.index);
routes.get('/roadmaps/info/:roadmapId',RoadMapController.indexId);

export default routes;
