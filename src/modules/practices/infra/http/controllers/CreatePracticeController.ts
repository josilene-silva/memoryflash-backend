import { CreatePracticeUseCase } from "@modules/practices/useCases/createPractices/CreatePracticeUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreatePracticeController {
  async handle(req: Request, res: Response): Promise<Response> {
    console.log(req.body);
    const createPracticeUseCase = container.resolve(CreatePracticeUseCase);

    const practice = await createPracticeUseCase.execute(req.body);

    return res.status(201).json(practice);
  }
}