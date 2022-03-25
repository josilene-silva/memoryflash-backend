import { DeleteSetUseCase } from "@modules/sets/useCases/deleteSet/DeleteSetUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class DeleteSetController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteSetUseCase = container.resolve(DeleteSetUseCase);

    await deleteSetUseCase.execute(id);

    return res.json({ message: "Set deleted" });
  }
}
