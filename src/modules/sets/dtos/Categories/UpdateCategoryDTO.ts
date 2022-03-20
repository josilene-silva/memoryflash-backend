import { UpdateOmits } from "@shared/dtos/UpdateOmits";
import { CategoryDTO } from "./CategoryDTO";

export type UpdateCategoryDTO = Omit<CategoryDTO, UpdateOmits>;
