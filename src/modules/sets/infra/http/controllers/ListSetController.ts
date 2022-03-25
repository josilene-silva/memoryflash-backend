import { ListSetUseCase } from "@modules/sets/useCases/listSet/ListSetUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListSetController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const listSetUseCase = container.resolve(ListSetUseCase);

    const set = await listSetUseCase.execute(id);

    return res.json(set);
  }
}
