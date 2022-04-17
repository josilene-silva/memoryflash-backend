import { CreatePracticeDTO } from "@modules/practices/dtos/CreatePracticeDTO";
import { IPracticesRepository } from "@modules/practices/repositories/IPracticesRepository";
import { getRepository, Repository } from "typeorm";
import { Practice } from "../entities/Practice";

export class PracticesRepository implements IPracticesRepository {
  private repository: Repository<Practice>;

  constructor() {
    this.repository = getRepository(Practice);
  }

  async create({
    setId,
    amountEasy,
    amountMedium,
    amountHard,
    startTime,
    endTime,
  }: CreatePracticeDTO): Promise<Practice> {
    const practice = this.repository.create({
      setId,
      amountEasy,
      amountMedium,
      amountHard,
      startTime,
      endTime,
    });

    const practiceCreated = await this.repository.save(practice);

    return practiceCreated;
  }
}
