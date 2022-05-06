import { UpdateSetDTO } from "@modules/sets/dtos";
import {
  ICategoriesRepository,
  ISetsRepository,
} from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest extends UpdateSetDTO {
  userId: string;
}

@injectable()
export class UpdateSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({
    id,
    name,
    description,
    categoryId,
    userId,
  }: IRequest): Promise<void> {
    const setExists = await this.setsRepository.findById(id);
    if (!setExists) throw new AppError("Conjunto não encontrado", 404);

    const categoryExists = await this.categoriesRepository.findById(categoryId);
    if (!categoryExists) throw new AppError("Categoria não encontrada", 404);

    await this.setsRepository.update({
      id,
      name,
      description,
      categoryId,
    });

    await this.cacheProvider.del(`set:${id}`);
    await this.cacheProvider.del(`sets:${userId}`);
  }
}
