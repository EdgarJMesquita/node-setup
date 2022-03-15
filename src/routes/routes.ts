import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateUserController } from "@controllers/CreateUserController";
import { Router } from "express";
const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);

export { router };
