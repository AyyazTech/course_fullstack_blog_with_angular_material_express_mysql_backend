import { Response } from "express";
import jwt from "jsonwebtoken";
import { CustomRequest } from "../../server";
import { TokensService } from "../../services/tokens.service";
import { UsersService } from "../../services/users.service";

export let regenerateTokenController = async (
  req: CustomRequest,
  resp: Response
) => {
  let refreshToken = req.body.refreshToken;
  try {
    let user: any = jwt.verify(
      refreshToken,
      process.env.TOKEN_SECRET as string
    );

    let tokenInDb = await TokensService.getToken({
      type: "refresh",
      token: refreshToken,
      userId: user.id,
    });
    if (!tokenInDb) throw new Error("You are not authorized person.");

    await TokensService.deleteUserTokens(user.id, "access");

    user = await UsersService.getUserById(user.id);

    let accessToken = jwt.sign(user, process.env.TOKEN_SECRET as string, {
      expiresIn: "1h",
    });

    await TokensService.createToken(accessToken, user.id, "access");

    resp.send({ accessToken });
  } catch (e: any) {
    resp.status(403).send({ message: e.message });
  }
};
