import { CreateCategoryDTO, UpdateCategoryDTO } from "@modules/sets/dtos";
import { Category } from "@modules/sets/infra/database/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/sets/repositories/ICategoriesRepository";

import { getRepository, Repository, Not } from "typeorm";

export class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name }: CreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      name,
    });

    const categoryCreated = await this.repository.save(category);

    return categoryCreated;
  }

  async findByName(name: string, id?: number): Promise<Category | undefined> {
    const category = await this.repository.findOne(
      id ? { name, id: Not(id) } : { name }
    );
    return category;
  }

  async findById(id: number): Promise<Category | undefined> {
    const category = await this.repository.findOne({ id });
    return category;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async update({ id, name }: UpdateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      id,
      name,
    });
    const categoryUpdated = this.repository.save(category);
    return categoryUpdated;
  }
}
