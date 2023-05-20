import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let updateCategoryController = async (
  req: CustomRequest,
  resp: Response
) => {
  let data = req.body;
  await CategoriesService.updateCategory(data.title, data.id);
  resp.send("Category is updated");
};
