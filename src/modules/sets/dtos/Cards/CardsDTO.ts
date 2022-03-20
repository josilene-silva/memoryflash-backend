import { IBaseEntity } from "@shared/dtos";

export type CardsDTO = IBaseEntity & {
  id: string;
  front: string;
  back: string;
  setId: string;
};
