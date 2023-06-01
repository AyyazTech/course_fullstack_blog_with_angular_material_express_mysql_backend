import { Router } from "express";
import { loginController } from "../controllers/auth/login.controller";
import { regenerateTokenController } from "../controllers/auth/regenerate-token.controller";
import { logoutController } from "../controllers/auth/logout.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export let authRoutes = Router();

authRoutes.post("/login", loginController as any);
authRoutes.post("/logout", authMiddleware as any, logoutController as any);
authRoutes.post("/regenerate_token", regenerateTokenController as any);
