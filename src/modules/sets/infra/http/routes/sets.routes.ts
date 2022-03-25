import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import { Router } from "express";

import { CreateSetController } from "../controllers/CreateSetController";
import { UpdateSetController } from "../controllers/UpdateSetController";
import { DeleteSetController } from "../controllers/DeleteSetController";
import { ListSetsController } from "../controllers/ListSetsController";

const createSetController = new CreateSetController();
const updateSetController = new UpdateSetController();
const deleteSetController = new DeleteSetController();
const listSetsController = new ListSetsController();

const setRoutes = Router();

setRoutes.post("/", ensureAuthenticate, createSetController.handle);
setRoutes.get("/", ensureAuthenticate, listSetsController.handle);
setRoutes.put("/:id", ensureAuthenticate, updateSetController.handle);
setRoutes.delete("/:id", ensureAuthenticate, deleteSetController.handle);

export { setRoutes };
