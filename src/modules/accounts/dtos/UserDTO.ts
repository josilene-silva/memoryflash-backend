import { IBaseEntity } from "@shared/dtos";

type UserDTO = IBaseEntity & {
  name: string;
  password: string;
  email: string;
};

export { UserDTO };
