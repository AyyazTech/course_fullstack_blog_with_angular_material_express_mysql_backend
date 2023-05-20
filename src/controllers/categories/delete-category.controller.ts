import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let deleteCategoryController = async (
  req: CustomRequest,
  resp: Response
) => {
  let categoryId = req.params.categoryId;
  await CategoriesService.deleteCategory(categoryId);

  resp.send("Category is deleted");
};
