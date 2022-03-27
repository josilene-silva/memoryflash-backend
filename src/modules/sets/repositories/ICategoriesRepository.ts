import { CreateCategoryDTO, UpdateCategoryDTO } from "@modules/sets/dtos";
import { Category } from "@modules/sets/infra/database/typeorm/entities/Category";

export interface ICategoriesRepository {
  create({ name }: CreateCategoryDTO): Promise<Category>;
  findByName(name: string, id?: number): Promise<Category | undefined>;
  findById(id: number): Promise<Category | undefined>;
  list(): Promise<Category[]>;
  update({ id, name }: UpdateCategoryDTO): Promise<Category>;
}
