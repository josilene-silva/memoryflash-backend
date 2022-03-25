import { UpdateOmits } from "@shared/dtos/UpdateOmits";
import { SetsDTO } from "./SetsDTO";

export type UpdateSetDTO = Omit<SetsDTO, UpdateOmits | "userId">;
