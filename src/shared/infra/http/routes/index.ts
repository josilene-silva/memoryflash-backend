import { Router } from "express";

import { userRoutes } from "@modules/accounts/infra/http/routes/users.routes";
import { authenticateRoutes } from "@modules/accounts/infra/http/routes/authenticate.routes";
import { categoryRoutes } from "@modules/sets/infra/http/routes/categories.routes";
import { setRoutes } from "@modules/sets/infra/http/routes/sets.routes";
import { cardRoutes } from "@modules/sets/infra/http/routes/cards.routes";
import { practicesRoutes } from "@modules/practices/infra/http/routes/practices.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/sets", setRoutes);
router.use("/cards", cardRoutes);
router.use("/practices", practicesRoutes);
router.use("/", authenticateRoutes);

export { router };
