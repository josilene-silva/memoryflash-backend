import { Category } from "@modules/sets/infra/database/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";

import { inject, injectable } from "tsyringe";

@injectable()
export class ListCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute(): Promise<Category[]> {
    let categories = [];

    const categoriesCache = await this.cacheProvider.get("categories");

    if (!categoriesCache) {
      categories = await this.categoriesRepository.list();
      await this.cacheProvider.set(`categories`, JSON.stringify(categories));
    } else {
      categories = JSON.parse(categoriesCache);
    }

    return categories;
  }
}
