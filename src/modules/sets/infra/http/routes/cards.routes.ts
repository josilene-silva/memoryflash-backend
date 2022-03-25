import { Router } from "express";

import { CreateCardController } from "../controllers/CreateCardController";
import { UpdateCardController } from "../controllers/UpdateCardController";
import { DeleteCardController } from "../controllers/DeleteCardController";

const createCardController = new CreateCardController();
const updateCardController = new UpdateCardController();
const deleteCardController = new DeleteCardController();

const cardRoutes = Router();

cardRoutes.post("/", createCardController.handle);
cardRoutes.put("/:id", updateCardController.handle);
cardRoutes.delete("/:id", deleteCardController.handle);

export { cardRoutes };
