import { IBaseEntity } from "@shared/dtos";

export type SetsDTO = IBaseEntity & {
  name: string;
  description: string;
  categoryId: number;
  userId: string;
};
