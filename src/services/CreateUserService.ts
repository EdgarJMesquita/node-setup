import { UsersRepositories } from "@repositories/UsersRepositories";
import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";

interface ICreateUserService {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: ICreateUserService) {
    const usersRepositories = getCustomRepository(UsersRepositories);
    if (!process.env.KEY) throw new Error("Error: Internal");

    const userAlreadyExist = await usersRepositories.findOne({ email });

    if (userAlreadyExist) throw new Error("Email already in use");

    const encryptedPassword = await hash(password, 8);

    const user = usersRepositories.create({
      name,
      email,
      password: encryptedPassword,
    });
    const { password: _, ...rest } = await usersRepositories.save(user);
    return {
      ...rest,
    };
  }
}

export { CreateUserService };
