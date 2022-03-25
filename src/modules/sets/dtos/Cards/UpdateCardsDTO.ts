import { UpdateOmits } from "@shared/dtos/UpdateOmits";
import { CardsDTO } from "./CardsDTO";

export type UpdateCardsDTO = Omit<CardsDTO, UpdateOmits>;
