import { Response } from "express";
import { CustomRequest } from "../server";
import jwt from "jsonwebtoken";
import { TokensService } from "../services/tokens.service";
import { UsersService } from "../services/users.service";

export async function authMiddleware(
  req: CustomRequest,
  resp: Response,
  next: any
) {
  try {
    if (!req.headers.authorization)
      throw new Error("You are not authorized person.");

    let token = req.headers.authorization.split("Bearer ")[1];
    let user: any = jwt.verify(token, process.env.TOKEN_SECRET as string);
    let tokens: any[] = await TokensService.getTokensByUserId(user.id);

    if (tokens.length < 1 || !tokens.find((t) => t.type === "access"))
      throw new Error("You are not authorized person");

    user = await UsersService.getUserById(user.id);
    req.user = user;
    next();
  } catch (e: any) {
    resp.status(403).send({ message: e.message });
  }
}
