import { CreateOmits } from "@shared/dtos";
import { CardsDTO } from "./CardsDTO";

export type CreateCardDTO = Omit<CardsDTO, CreateOmits>;
