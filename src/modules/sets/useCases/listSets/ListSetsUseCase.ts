import { inject, injectable } from "tsyringe";
import { ISetsRepository } from "@modules/sets/repositories";
import { Set } from "@modules/sets/infra/database/typeorm/entities/Set";

@injectable()
export class ListSetsUseCase {
  constructor(
    @inject("SetsRepository")
    private setsRepository: ISetsRepository
  ) {}

  async execute(): Promise<Set[]> {
    const sets = await this.setsRepository.list();

    return sets;
  }
}