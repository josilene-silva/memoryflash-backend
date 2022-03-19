import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);

export { userRoutes };
