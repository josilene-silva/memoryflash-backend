import { CreateOmits } from "@shared/dtos";
import { SetsDTO } from "./SetsDTO";

export type CreateSetsDTO = Omit<SetsDTO, CreateOmits>;
