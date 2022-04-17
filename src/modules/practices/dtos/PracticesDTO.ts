import { IBaseEntity } from "@shared/dtos";

export type PracticesDTO = IBaseEntity & {
  id: string;
  setId: string;
  amountEasy: number;
  amountMedium: number;
  amountHard: number;
  startTime: Date;
  endTime: Date;
};
