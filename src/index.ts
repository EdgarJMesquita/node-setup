import "dotenv/config";
import "reflect-metadata";
import "./database";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes/routes";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json({
        error: error.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);
app.listen(3000, () => {
  console.log(`running on http://localhost:${PORT}`);
});
