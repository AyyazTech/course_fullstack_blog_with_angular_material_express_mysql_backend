import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";
import { PostsService } from "../../services/posts.service";

export let createPostController = async (
  req: CustomRequest,
  resp: Response
) => {
  let title = req.body.title;
  let content = req.body.content;
  let categoryId = req.body.categoryId;

  let category: any = await CategoriesService.getCategoryId(categoryId);
  if (!category) {
    return resp.send("This category does not exist.");
  }

  await PostsService.createPost({ title, content, categoryId });

  resp.send("Post has been created successfully.");
};
