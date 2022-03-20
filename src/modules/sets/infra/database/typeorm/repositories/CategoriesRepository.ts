import { CreateCategoryDTO, UpdateCategoryDTO } from "@modules/sets/dtos";
import { Categories } from "@modules/sets/infra/database/typeorm/entities/Categories";
import { ICategoriesRepository } from "@modules/sets/repositories/ICategoriesRepository";

import { getRepository, Repository, Not } from "typeorm";

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

  async findByName(name: string, id?: number): Promise<Categories | undefined> {
    const category = await this.repository.findOne(
      id ? { name, id: Not(id) } : { name }
    );
    return category;
  }

  async findById(id: number): Promise<Categories | undefined> {
    const category = await this.repository.findOne({ id });
    return category;
  }

  async update({ id, name }: UpdateCategoryDTO): Promise<Categories> {
    const category = this.repository.create({
      id,
      name,
    });
    const categoryUpdated = this.repository.save(category);
    return categoryUpdated;
  }
}
