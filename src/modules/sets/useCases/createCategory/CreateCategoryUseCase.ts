import { CreateCategoryDTO } from "@modules/sets/dtos";
import { Categories } from "@modules/sets/infra/database/typeorm/entities/Categories";
import { ICategoriesRepository } from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({ name }: CreateCategoryDTO): Promise<Categories> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    const category = await this.categoriesRepository.create({ name });

    return category;
  }
}
