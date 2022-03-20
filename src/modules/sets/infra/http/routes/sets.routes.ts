import { Router } from "express";

import { CreateSetController } from "../controllers/CreateSetController";

const createSetController = new CreateSetController();

const setRoutes = Router();

setRoutes.post("/", createSetController.handle);

export { setRoutes };
