import { Router } from "express";

import { CreatePracticeController } from "../controllers/CreatePracticeController";

const createPracticeController = new CreatePracticeController();

const practicesRoutes = Router();

practicesRoutes.post("/", createPracticeController.handle);

export { practicesRoutes };
