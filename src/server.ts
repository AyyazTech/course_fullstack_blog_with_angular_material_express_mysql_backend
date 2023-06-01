import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

import { Connection } from "mysql2/promise";
import { db } from "./db";
import { routes } from "./routes/index.routes";
import cors from "cors";
export interface CustomRequest extends Request {
  db: Connection;
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
  };
}

let app = express();

app.use(cors());

async function dbMiddleware(
  req: CustomRequest,
  resp: Response,
  next: NextFunction
) {
  req.db = await db;
  next();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(dbMiddleware as any);

app.use("/api", routes);

app.listen(3200, () => {
  console.log("http://localhost:3200");
});
