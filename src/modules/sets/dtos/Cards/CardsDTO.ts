import { IBaseEntity } from "@shared/dtos";

export type CardsDTO = IBaseEntity & {
  front: string;
  back: string;
  setId: string;
};
