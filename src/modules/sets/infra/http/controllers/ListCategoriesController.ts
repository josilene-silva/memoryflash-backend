import { ListCategoriesUseCase } from "@modules/sets/useCases/listCategories/ListCategoriesUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListCategoriesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const categories = await listCategoriesUseCase.execute();

    return res.json(categories);
  }
}
