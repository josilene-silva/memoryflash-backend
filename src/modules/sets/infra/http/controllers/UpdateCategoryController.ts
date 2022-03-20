import { UpdateCategoryUseCase } from "@modules/sets/useCases/updateCategory/UpdateCategoryUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const { id } = req.params;

    const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);

    const category = await updateCategoryUseCase.execute({
      name,
      id: Number(id),
    });

    return res.json(category);
  }
}
