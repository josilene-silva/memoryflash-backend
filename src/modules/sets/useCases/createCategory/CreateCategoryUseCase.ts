import { CreateCategoryDTO } from "@modules/sets/dtos";
import { Category } from "@modules/sets/infra/database/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({ name }: CreateCategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    await this.cacheProvider.del("categories");
    const category = await this.categoriesRepository.create({ name });

    return category;
  }
}
