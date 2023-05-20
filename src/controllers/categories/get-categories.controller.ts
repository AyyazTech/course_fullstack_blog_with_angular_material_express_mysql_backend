import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let getCategoriesController = async (
  req: CustomRequest,
  resp: Response
) => {
  let categories = await CategoriesService.getCategories();
  resp.send(categories);
};
