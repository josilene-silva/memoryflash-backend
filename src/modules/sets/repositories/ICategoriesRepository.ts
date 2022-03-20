import { CreateCategoryDTO } from "@modules/sets/dtos";
import { Categories } from "@modules/sets/infra/database/typeorm/entities/Categories";

export interface ICategoriesRepository {
  create({ name }: CreateCategoryDTO): Promise<Categories>;
  findByName(name: string): Promise<Categories | undefined>;
}
