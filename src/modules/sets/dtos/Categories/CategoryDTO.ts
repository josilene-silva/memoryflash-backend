import { IBaseEntity } from "@shared/dtos";

export type CategoryDTO = IBaseEntity<number> & {
  name: string;
};
