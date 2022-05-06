import { DeleteCardUseCase } from "@modules/sets/useCases/deleteCard/DeleteCardUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteCardController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCardUseCase = container.resolve(DeleteCardUseCase);

    await deleteCardUseCase.execute(id, req.user.id);

    return res.json({ message: "Cartão apagado" });
  }
}
