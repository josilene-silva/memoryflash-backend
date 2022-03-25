import { UpdateCategoryDTO } from "@modules/sets/dtos";
import { Category } from "@modules/sets/infra/database/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name, id }: UpdateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.findById(id);

    if (!category) {
      throw new AppError("Category don't exists", 404);
    }

    const nameAlreadyExists = await this.categoriesRepository.findByName(
      name,
      id
    );

    if (nameAlreadyExists) {
      throw new AppError("Category already exists");
    }

    const categoryUpdated = await this.categoriesRepository.update({
      id,
      name,
    });

    return categoryUpdated;
  }
}
