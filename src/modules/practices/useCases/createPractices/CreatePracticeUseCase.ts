import { inject, injectable } from "tsyringe";

import { CreatePracticeDTO } from "@modules/practices/dtos/CreatePracticeDTO";
import { Practice } from "@modules/practices/infra/database/typeorm/entities/Practice";
import { IPracticesRepository } from "@modules/practices/repositories/IPracticesRepository";
import { ISetsRepository } from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";

@injectable()
export class CreatePracticeUseCase {
  constructor(
    @inject("PracticesRepository")
    private practicesRepository: IPracticesRepository,
    @inject("SetsRepository")
    private setsRepository: ISetsRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute({
    setId,
    amountEasy,
    amountMedium,
    amountHard,
    startTime,
    endTime,
    userId,
  }: CreatePracticeDTO): Promise<Practice> {
    const set = this.setsRepository.findById(setId);

    if (!set) throw new AppError("Conjunto não encontrado", 404);

    const practice = await this.practicesRepository.create({
      setId,
      amountEasy,
      amountMedium,
      amountHard,
      startTime,
      endTime,
    });

    await this.cacheProvider.set(
      `practice:${practice.id}`,
      JSON.stringify(practice)
    );
    await this.cacheProvider.del(`set:${setId}`);
    await this.cacheProvider.del(`sets:${userId}`);

    return practice;
  }
}
