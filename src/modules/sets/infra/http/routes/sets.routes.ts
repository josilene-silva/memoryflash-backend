import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import { Router } from "express";

import { CreateSetController } from "../controllers/CreateSetController";
import { UpdateSetController } from "../controllers/UpdateSetController";
import { DeleteSetController } from "../controllers/DeleteSetController";

const createSetController = new CreateSetController();
const updateSetController = new UpdateSetController();
const deleteSetController = new DeleteSetController();

const setRoutes = Router();

setRoutes.post("/", ensureAuthenticate, createSetController.handle);
setRoutes.put("/:id", ensureAuthenticate, updateSetController.handle);
setRoutes.delete("/:id", ensureAuthenticate, deleteSetController.handle);

export { setRoutes };
