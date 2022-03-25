import { ISetsRepository } from "@modules/sets/repositories";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class DeleteSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const setExists = await this.setsRepository.findById(id);
    if (!setExists) throw new AppError("Set don't exists");

    await this.setsRepository.delete(id);
  }
}
