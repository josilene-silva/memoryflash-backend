import { Router } from "express";

import { CreateCardController } from "../controllers/CreateCardController";

const createCardController = new CreateCardController();

const cardRoutes = Router();

cardRoutes.post("/", createCardController.handle);

export { cardRoutes };
