
import express from 'express';
import UserController from './controllers/movie.controller.js';
import { createValidator } from 'express-joi-validation';
import CreateUserDto from './dto/create-user.dto.js'; // นำเข้า default export
import UpdateUserDto from './dto/update-user.dto.js';
const UserRouter = express.Router();
const validator = createValidator(); // สร้าง validator

UserRouter.post('/', validator.body(CreateUserDto), UserController.addUser);
UserRouter.get('/', UserController.showAllUser);
UserRouter.get('/:id', UserController.getProductById)
UserRouter.put('/:id', validator.body(UpdateUserDto), UserController.updateMovie);
UserRouter.delete('/:id',  UserController.deleteUser);
export default UserRouter;

