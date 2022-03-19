import { Router } from "express";

import { userRoutes } from "@modules/accounts/infra/http/routes/users.routes";
import { authenticateRoutes } from "@modules/accounts/infra/http/routes/authenticate.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/", authenticateRoutes);

export { router };
