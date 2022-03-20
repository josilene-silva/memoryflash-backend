import { CreateCategoryDTO } from "@modules/sets/dtos";
import { Categories } from "@modules/sets/infra/database/typeorm/entities/Categories";
import { ICategoriesRepository } from "@modules/sets/repositories/ICategoriesRepository";

import { getRepository, Repository } from "typeorm";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Categories>;

  constructor() {
    this.repository = getRepository(Categories);
  }

  async create({ name }: CreateCategoryDTO): Promise<Categories> {
    const category = this.repository.create({
      name,
    });

    const categoryCreated = await this.repository.save(category);

    return categoryCreated;
  }

  async findByName(name: string): Promise<Categories> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}
