import { UpdateSetUseCase } from "@modules/sets/useCases/updateSet/UpdateSetUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateSetController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, categoryId } = req.body;
    const { id } = req.params;

    const updateSetUseCase = container.resolve(UpdateSetUseCase);

    await updateSetUseCase.execute({
      id,
      name,
      description,
      categoryId,
      userId: req.user.id,
    });

    return res.json({ message: "Set updated" });
  }
}
