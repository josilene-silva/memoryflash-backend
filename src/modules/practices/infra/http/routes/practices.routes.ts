import { Router } from "express";

import { CreatePracticeController } from "../controllers/CreatePracticeController";
import { ListPracticeController } from "../controllers/ListPracticeController";

const createPracticeController = new CreatePracticeController();
const listPracticeController = new ListPracticeController();

const practicesRoutes = Router();

practicesRoutes.post("/", createPracticeController.handle);
practicesRoutes.get("/:id", listPracticeController.handle);

export { practicesRoutes };
