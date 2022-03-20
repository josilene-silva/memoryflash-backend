import { CreateOmits } from "@shared/dtos";
import { CategoryDTO } from "./CategoryDTO";

export type CreateCategoryDTO = Omit<CategoryDTO, CreateOmits>;
