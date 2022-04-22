import { CreateOmits } from "@shared/dtos";
import { PracticesDTO } from "./PracticesDTO";

export type CreatePracticeDTO = Omit<PracticesDTO, CreateOmits> & {
  userId?: string;
};
