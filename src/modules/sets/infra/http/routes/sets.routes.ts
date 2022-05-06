import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import { Router } from "express";

import { CreateSetController } from "../controllers/CreateSetController";
import { UpdateSetController } from "../controllers/UpdateSetController";
import { DeleteSetController } from "../controllers/DeleteSetController";
import { ListSetsController } from "../controllers/ListSetsController";
import { ListSetController } from "../controllers/ListSetController";

const createSetController = new CreateSetController();
const updateSetController = new UpdateSetController();
const deleteSetController = new DeleteSetController();
const listSetsController = new ListSetsController();
const listSetController = new ListSetController();

const setRoutes = Router();

setRoutes.use(ensureAuthenticate);
setRoutes.post("/", createSetController.handle);
setRoutes.get("/", listSetsController.handle);
setRoutes.get("/:id", listSetController.handle);
setRoutes.put("/:id", updateSetController.handle);
setRoutes.delete("/:id", deleteSetController.handle);

export { setRoutes };
