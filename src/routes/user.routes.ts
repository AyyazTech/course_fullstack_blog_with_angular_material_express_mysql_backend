import { Router } from "express";
import { getUserByIdController } from "../controllers/users/get-user-by-id.controller";

export let userRoutes = Router();

userRoutes.get("/:id", getUserByIdController as any);
