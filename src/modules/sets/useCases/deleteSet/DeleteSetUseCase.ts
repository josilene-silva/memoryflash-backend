import { ISetsRepository } from "@modules/sets/repositories";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute(id: string, userId: string): Promise<void> {
    const setExists = await this.setsRepository.findById(id);
    if (!setExists) throw new AppError("Conjunto não encotrado");

    await this.setsRepository.delete(id);

    await this.cacheProvider.del(`set:${id}`);
    await this.cacheProvider.del(`sets:${userId}`);
  }
}
