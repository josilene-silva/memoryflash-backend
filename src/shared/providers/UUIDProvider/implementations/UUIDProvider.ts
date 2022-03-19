import { v4 as uuidV4 } from "uuid";

import { IUUIDProvider } from "../models/IUUIDProvider";

export class UUIDProvider implements IUUIDProvider {
  generate(): string {
    return uuidV4();
  }
}
