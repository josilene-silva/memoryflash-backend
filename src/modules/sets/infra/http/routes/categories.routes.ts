import { Router } from "express";

import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();

const categoryRoutes = Router();

categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.put("/:id", updateCategoryController.handle);

export { categoryRoutes };
