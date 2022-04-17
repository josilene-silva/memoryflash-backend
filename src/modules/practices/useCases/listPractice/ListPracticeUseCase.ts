import { Practice } from "@modules/practices/infra/database/typeorm/entities/Practice";
import { IPracticesRepository } from "@modules/practices/repositories/IPracticesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListPracticeUseCase {
  constructor(
    @inject("PracticesRepository")
    private practicesRepository: IPracticesRepository
  ) {}

  async execute(id: string): Promise<Practice> {
    const practice = await this.practicesRepository.list(id);

    if (!practice) throw new AppError("Prática não encontrada", 404);

    return practice;
  }
}
