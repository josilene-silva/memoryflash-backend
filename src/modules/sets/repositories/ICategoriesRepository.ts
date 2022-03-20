import { CreateCategoryDTO, UpdateCategoryDTO } from "@modules/sets/dtos";
import { Categories } from "@modules/sets/infra/database/typeorm/entities/Categories";

export interface ICategoriesRepository {
  create({ name }: CreateCategoryDTO): Promise<Categories>;
  findByName(name: string, id?: number): Promise<Categories | undefined>;
  findById(id: number): Promise<Categories | undefined>;
  update({ id, name }: UpdateCategoryDTO): Promise<Categories>;
}
