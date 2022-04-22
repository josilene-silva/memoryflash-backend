import { Practice } from "@modules/practices/infra/database/typeorm/entities/Practice";
import { IPracticesRepository } from "@modules/practices/repositories/IPracticesRepository";
import { ICacheProvider } from "@shared/container/providers/CacheProvider/ICacheProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListPracticeUseCase {
  constructor(
    @inject("PracticesRepository")
    private practicesRepository: IPracticesRepository,
    @inject("CacheProvider")
    private cacheProvider: ICacheProvider
  ) {}

  async execute(id: string): Promise<Practice> {
    let practice = null;

    const practiceCache = await this.cacheProvider.get(`practice:${id}`);

    if (!practiceCache) {
      console.log("Pega do banco");
      practice = await this.practicesRepository.listOne(id);
      await this.cacheProvider.set(`practice:${id}`, JSON.stringify(practice));
    } else {
      console.log("Pega do cache");
      practice = JSON.parse(practiceCache);
    }

    if (!practice) throw new AppError("Prática não encontrada", 404);

    return practice;
  }
}
