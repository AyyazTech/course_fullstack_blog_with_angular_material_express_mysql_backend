import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let getCategoryBySlugController = async (
  req: CustomRequest,
  resp: Response
) => {
  let categories = await CategoriesService.getCategorySlug(req.params.slug);
  resp.send(categories);
};
