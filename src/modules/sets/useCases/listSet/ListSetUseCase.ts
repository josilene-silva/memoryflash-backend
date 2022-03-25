import { inject, injectable } from "tsyringe";
import { ISetsRepository } from "@modules/sets/repositories";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";

@injectable()
export class ListSetUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository
  ) {}

  async execute(id: string): Promise<Set> {
    const set = await this.setsRepository.listOne(id);

    return set;
  }
}
