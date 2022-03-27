import { Router } from "express";

import { CreateCardController } from "../controllers/CreateCardController";
import { UpdateCardController } from "../controllers/UpdateCardController";
import { DeleteCardController } from "../controllers/DeleteCardController";
import { ListCardController } from "../controllers/ListCardController";

const createCardController = new CreateCardController();
const updateCardController = new UpdateCardController();
const deleteCardController = new DeleteCardController();
const listCardController = new ListCardController();

const cardRoutes = Router();

cardRoutes.post("/", createCardController.handle);
cardRoutes.get("/:id", listCardController.handle);
cardRoutes.put("/:id", updateCardController.handle);
cardRoutes.delete("/:id", deleteCardController.handle);

export { cardRoutes };
