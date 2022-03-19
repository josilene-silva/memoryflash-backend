import { AuthenticateUserUseCase } from "@modules/accounts/useCases/authenticateUser/authenticateUserUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

export class AuthenticateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, email } = req.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const userAuthenticated = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return res.json(userAuthenticated);
  }
}
