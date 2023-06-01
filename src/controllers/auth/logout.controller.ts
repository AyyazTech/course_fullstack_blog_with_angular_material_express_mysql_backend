import { Response } from "express";
import { CustomRequest } from "../../server";
import { TokensService } from "../../services/tokens.service";

export let logoutController = async (req: CustomRequest, resp: Response) => {
  let user = req.user;

  await TokensService.deleteUserTokens(user.id, "access");
  await TokensService.deleteUserTokens(user.id, "refresh");

  resp.status(200).send({ message: "done" });
};
