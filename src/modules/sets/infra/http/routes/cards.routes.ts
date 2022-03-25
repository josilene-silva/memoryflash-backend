import { Router } from "express";

import { CreateCardController } from "../controllers/CreateCardController";
import { UpdateCardController } from "../controllers/UpdateCardController";

const createCardController = new CreateCardController();
const updateCardController = new UpdateCardController();

const cardRoutes = Router();

cardRoutes.post("/", createCardController.handle);
cardRoutes.put("/:id", updateCardController.handle);

export { cardRoutes };
