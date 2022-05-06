import { UpdateCardUseCase } from "@modules/sets/useCases/updateCard/UpdateCardUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateCardController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { front, back, setId } = req.body;
    const { id } = req.params;

    const updateCardUseCase = container.resolve(UpdateCardUseCase);

    await updateCardUseCase.execute({
      front,
      back,
      setId,
      id,
      userId: req.user.id,
    });

    return res.json({ message: "Card updated" });
  }
}
