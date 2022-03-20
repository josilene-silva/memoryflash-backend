import { IBaseEntity } from "@shared/dtos";

type UserDTO = IBaseEntity & {
  id: string;
  name: string;
  password: string;
  email: string;
};

export { UserDTO };
