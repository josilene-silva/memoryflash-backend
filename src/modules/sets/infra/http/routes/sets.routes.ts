import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import { Router } from "express";

import { CreateSetController } from "../controllers/CreateSetController";

const createSetController = new CreateSetController();

const setRoutes = Router();

setRoutes.post("/", ensureAuthenticate, createSetController.handle);

export { setRoutes };
