import { UpdateSetDTO } from "@modules/sets/dtos";
import {
  ICategoriesRepository,
  ISetsRepository,
} from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class UpdateSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute({
    id,
    name,
    description,
    categoryId,
  }: UpdateSetDTO): Promise<void> {
    const setExists = await this.setsRepository.findById(id);
    if (!setExists) throw new AppError("Set don't found", 404);

    const categoryExists = await this.categoriesRepository.findById(categoryId);
    if (!categoryExists) throw new AppError("Category don't found", 404);

    await this.setsRepository.update({
      id,
      name,
      description,
      categoryId,
    });
  }
}
