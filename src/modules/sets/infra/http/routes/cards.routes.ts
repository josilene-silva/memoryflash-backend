import { Router } from "express";

import { UpdateCardDifficultyLevelController } from "@modules/practices/infra/http/controllers/UpdateCardDifficultyLevelController";
import { ensureAuthenticate } from "@shared/infra/http/middlewares/ensureAuthenticate";
import { CreateCardController } from "../controllers/CreateCardController";
import { UpdateCardController } from "../controllers/UpdateCardController";
import { DeleteCardController } from "../controllers/DeleteCardController";
import { ListCardController } from "../controllers/ListCardController";

const createCardController = new CreateCardController();
const updateCardController = new UpdateCardController();
const deleteCardController = new DeleteCardController();
const listCardController = new ListCardController();
const updateCardDifficultyLevelController =
  new UpdateCardDifficultyLevelController();

const cardRoutes = Router();

cardRoutes.use(ensureAuthenticate);
cardRoutes.post("/", createCardController.handle);
cardRoutes.get("/:id", listCardController.handle);
cardRoutes.put("/:id", updateCardController.handle);
cardRoutes.patch("/", updateCardDifficultyLevelController.handle);
cardRoutes.delete("/:id", deleteCardController.handle);

export { cardRoutes };
