import { ListPracticeUseCase } from "@modules/practices/useCases/listPractice/ListPracticeUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListPracticeController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const listPracticeUseCase = container.resolve(ListPracticeUseCase);

    const practice = await listPracticeUseCase.execute(id);

    return res.json(practice);
  }
}
