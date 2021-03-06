import { UpdateCategoryDTO } from "@modules/sets/dtos";
import { Category } from "@modules/sets/infra/database/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({ name, id }: UpdateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError("Categoria não encontrada", 404);
    }

    const nameAlreadyExists = await this.categoriesRepository.findByName(
      name,
      id
    );

    if (nameAlreadyExists) {
      throw new AppError("Categoria já cadastrada");
    }

    const categoryUpdated = await this.categoriesRepository.update({
      id,
      name,
    });

    await this.cacheProvider.del("categories");

    return categoryUpdated;
  }
}
