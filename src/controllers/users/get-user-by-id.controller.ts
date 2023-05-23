import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";
import { UsersService } from "../../services/users.service";

export let getUserByIdController = async (
  req: CustomRequest,
  resp: Response
) => {
  let user = await UsersService.getUserById(req.params.id);
  resp.send(user);
};
