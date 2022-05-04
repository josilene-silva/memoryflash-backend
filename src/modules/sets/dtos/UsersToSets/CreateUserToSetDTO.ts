import { CreateOmits } from "@shared/dtos";
import { UserToSetDTO } from "./UserToSetDTO";

export type CreateUserToSetDTO = Omit<
  UserToSetDTO,
  CreateOmits | "user" | "set"
>;
