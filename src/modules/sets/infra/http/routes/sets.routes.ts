import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import { Router } from "express";

import { CreateSetController } from "../controllers/CreateSetController";
import { UpdateSetController } from "../controllers/UpdateSetController";

const createSetController = new CreateSetController();
const updateSetController = new UpdateSetController();

const setRoutes = Router();

setRoutes.post("/", ensureAuthenticate, createSetController.handle);
setRoutes.put("/:id", ensureAuthenticate, updateSetController.handle);

export { setRoutes };
