import { IBaseEntity } from "@shared/dtos";

export type CategoryDTO = IBaseEntity & {
  id: number;
  name: string;
};
