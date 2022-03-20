import { CreateCategoryUseCase } from "@modules/sets/useCases/createCategory/CreateCategoryUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    const category = await createCategoryUseCase.execute({ name });

    return res.status(201).json(category);
  }
}
