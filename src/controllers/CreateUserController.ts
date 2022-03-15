import { CreateUserService } from "@services/CreateUserService";
import { Request, Response } from "express";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;
    if (!name) throw new Error("Missing name");
    if (!email) throw new Error("Missing email");
    if (!password) throw new Error("Missing password");

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.status(201).json({ model: user });
  }
}

export { CreateUserController };
