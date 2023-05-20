import { Response } from "express";
import { CustomRequest } from "../../server";
import { CategoriesService } from "../../services/categories.service";
import { PostsService } from "../../services/posts.service";

export let updatePostController = async (
  req: CustomRequest,
  resp: Response
) => {
  try {
    let title = req.body.title;
    let content = req.body.content;
    let categoryId = req.body.categoryId;
    let id = req.body.id;

    // check if id is correct
    let post = await PostsService.getPostById(id);
    if (!post) throw new Error("Invalid post ID");

    await PostsService.updatePost({
      title,
      content,
      categoryId,
      id,
    });
    resp.send("Post has been updated successfully.");
  } catch (e) {
    return resp.status(500).send(e);
  }
};
