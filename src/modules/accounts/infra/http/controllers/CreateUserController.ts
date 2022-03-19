import { CreateUserUseCase } from "@modules/accounts/useCases/createUser/CreateUserUseCase";

import { Request, Response } from "express";
import { container } from "tsyringe";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({ name, email, password });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
