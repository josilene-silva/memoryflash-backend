import { UpdateCardDifficultyLevelUseCase } from "@modules/practices/useCases/updateCardDifficultyLevel/UpdateCardDifficultyLevelUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class UpdateCardDifficultyLevelController {
  async handle(req: Request, res: Response): Promise<Response> {
    const updateCardDifficultyLevelUseCase = container.resolve(
      UpdateCardDifficultyLevelUseCase
    );

    await updateCardDifficultyLevelUseCase.execute(req.body);

    return res.status(204).send();
  }
}
