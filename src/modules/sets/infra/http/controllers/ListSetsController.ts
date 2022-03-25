import { ListSetsUseCase } from "@modules/sets/useCases/listSets/ListSetsUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListSetsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listSetsUseCase = container.resolve(ListSetsUseCase);

    const sets = await listSetsUseCase.execute();

    return res.json(sets);
  }
}
