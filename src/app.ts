import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors";

import "@shared/container";
import createConnection from "@shared/infra/database/typeorm";
import { router } from "@shared/infra/http/routes";

createConnection();
const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

export { app };
