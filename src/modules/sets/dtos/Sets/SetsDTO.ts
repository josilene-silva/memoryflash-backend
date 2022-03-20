import { IBaseEntity } from "@shared/dtos";

export type SetsDTO = IBaseEntity & {
  id: string;
  name: string;
  description: string;
  categoryId: number;
  userId: string;
};
