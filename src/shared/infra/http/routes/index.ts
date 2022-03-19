import { Router } from "express";

import { userRoutes } from "@modules/accounts/infra/http/routes/users.routes";

const router = Router();

router.use("/users", userRoutes);

export { router };
