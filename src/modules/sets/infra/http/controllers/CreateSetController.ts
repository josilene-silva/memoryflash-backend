import { CreateSetUseCase } from "@modules/sets/useCases/createSet/CreateSetUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateSetController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, categoryId } = req.body;

    const createSetUseCase = container.resolve(CreateSetUseCase);

    const set = await createSetUseCase.execute({
      name,
      description,
      userId: req.user.id,
      categoryId,
    });

    return res.status(201).json(set);
  }
}
