import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function AuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authorization = request.headers.authorization;

  if (!authorization) throw new Error("Invalid token");

  const [_, token] = authorization.split(" ");

  if (!process.env.JWT_KEY) return;

  try {
    const payload = verify(token, process.env.JWT_KEY);
    request.user_id = Number(payload.sub);
    next();
  } catch (error) {
    return response.status(401).end();
  }
}
