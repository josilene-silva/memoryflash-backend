import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import { Router } from "express";

import { CreatePracticeController } from "../controllers/CreatePracticeController";
import { ListPracticeController } from "../controllers/ListPracticeController";

const createPracticeController = new CreatePracticeController();
const listPracticeController = new ListPracticeController();

const practicesRoutes = Router();

practicesRoutes.post("/", ensureAuthenticate, createPracticeController.handle);
practicesRoutes.get("/:id", listPracticeController.handle);

export { practicesRoutes };
