import { CreateOmits } from "@shared/dtos";

import { UserDTO } from "./UserDTO";

type CreateUserDTO = Omit<UserDTO, CreateOmits>;

export { CreateUserDTO };
