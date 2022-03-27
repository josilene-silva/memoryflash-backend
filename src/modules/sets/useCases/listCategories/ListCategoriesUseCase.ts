import { Category } from "@modules/sets/infra/database/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/sets/repositories";

import { inject, injectable } from "tsyringe";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}
