import { AuthenticateUserService } from "@services/AuthenticateUserService";
import { Request, Response } from "express";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateUserService = new AuthenticateUserService();
    const user = await authenticateUserService.execute({
      email,
      password,
    });
    return response.status(200).json(user);
  }
}

export { AuthenticateUserController };
