import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";

export let createCategoryController = async (
  req: CustomRequest,
  resp: Response
) => {
  let title = req.body.title;

  let response: any = await CategoriesService.createCategory(title);
  let categoryId = response.insertId;
  let category: any = await CategoriesService.getCategoryId(categoryId);
  resp.send(category);
};
