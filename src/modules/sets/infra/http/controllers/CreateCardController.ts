import { CreateCardUseCase } from "@modules/sets/useCases/createCard/CreateCardUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateCardController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { front, back, setId } = req.body;

    const createCardUseCase = container.resolve(CreateCardUseCase);

    const card = await createCardUseCase.execute({
      front,
      back,
      setId,
    });

    return res.status(201).json(card);
  }
}
