import { UsersRepositories } from "@repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";

interface IAuthenticateUserService {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserService) {
    if (!process.env.KEY) throw new Error("Error: internal");

    if (!email) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");

    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) throw new Error("Email/Password is incorrect");

    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) throw new Error("Email/Password is incorrect");

    const payload = {
      email: user.email,
    };

    const token = sign(payload, process.env.KEY, {
      subject: String(user.id),
      expiresIn: "1d",
    });

    const { password: _, ...rest } = user;

    return {
      ...rest,
      token,
    };
  }
}

export { AuthenticateUserService };
