import { Response } from "express";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../../server";
import { TokensService } from "../../services/tokens.service";
import { UsersService } from "../../services/users.service";

export let loginController = async (req: CustomRequest, resp: Response) => {
  let email = req.body.email;
  let password = req.body.password;

  let user = await UsersService.getUserByEmailAndPassword(email, password);

  if (!user) {
    resp.status(403).send({ message: "Invalid username or password" });
    return;
  }

  await TokensService.deleteUserTokens(user.id);

  let accessToken = jwt.sign(user, process.env.TOKEN_SECRET as string, {
    expiresIn: "5m",
  });

  let refreshToken = jwt.sign(user, process.env.TOKEN_SECRET as string);
  await TokensService.createToken(accessToken, user.id, "access");
  await TokensService.createToken(refreshToken, user.id, "refresh");
  resp.send({
    accessToken,
    refreshToken,
    user,
  });
};
