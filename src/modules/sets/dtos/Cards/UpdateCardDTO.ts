import { UpdateOmits } from "@shared/dtos/UpdateOmits";
import { CardsDTO } from "./CardsDTO";

export type UpdateCardDTO = Omit<CardsDTO, UpdateOmits>;
