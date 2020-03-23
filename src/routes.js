const { Router } = require('express');

const routes = Router();

const authMiddleware = require('./middlewares/Auth');

const RegisterController = require('./controllers/RegisterController');
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');

routes.post('/register', RegisterController.store);
routes.post('/auth', AuthController.index);
routes.get('/posts', authMiddleware, PostController.index);
routes.get('/', UserController.index);

module.exports = routes;