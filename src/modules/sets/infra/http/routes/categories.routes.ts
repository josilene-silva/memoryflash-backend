import { Router } from "express";

import { CreateCategoryController } from "../controllers/CreateCategoryController";

const createCategoryController = new CreateCategoryController();

const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController.handle);

export { categoryRoutes };
