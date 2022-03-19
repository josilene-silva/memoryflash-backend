import { Router } from "express";

import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController();

const authenticateRoutes = Router();

authenticateRoutes.post("/login", authenticateUserController.handle);

export { authenticateRoutes };
