import { CreateOmits } from "@shared/dtos";
import { SetsDTO } from "./SetsDTO";

export type CreateSetDTO = Omit<SetsDTO, CreateOmits>;
