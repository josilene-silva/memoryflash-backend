import { Router } from "express";

import { userRoutes } from "@modules/accounts/infra/http/routes/users.routes";
import { authenticateRoutes } from "@modules/accounts/infra/http/routes/authenticate.routes";
import { categoryRoutes } from "@modules/sets/infra/http/routes/categories.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/", authenticateRoutes);

export { router };
