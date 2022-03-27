import { Router } from "express";

import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";
import { ListCategoriesController } from "../controllers/ListCategoriesController";

const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const listCategoriesController = new ListCategoriesController();

const categoryRoutes = Router();

categoryRoutes.get("/", listCategoriesController.handle);
categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.put("/:id", updateCategoryController.handle);

export { categoryRoutes };
