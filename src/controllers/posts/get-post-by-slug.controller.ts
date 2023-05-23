import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostsService } from "../../services/posts.service";

export let getPostBySlugController = async (
  req: CustomRequest,
  resp: Response
) => {
  let post = await PostsService.getPostBySlug(req.params.slug);
  resp.send(post);
};
