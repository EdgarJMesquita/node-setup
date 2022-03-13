import "dotenv/config";
import "reflect-metadata";
import "./database";
import express from "express";
import { router } from "./routes/routes";
const PORT = process.env.PORT || 3030;
const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
