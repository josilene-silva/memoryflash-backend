import { ListCardUseCase } from "@modules/sets/useCases/listCard/ListCardUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListCardController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const listCardUseCase = container.resolve(ListCardUseCase);

    const categories = await listCardUseCase.execute(id);

    return res.json(categories);
  }
}
