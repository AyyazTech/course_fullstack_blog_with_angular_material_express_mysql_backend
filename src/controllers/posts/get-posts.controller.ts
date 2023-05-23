import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostsService } from "../../services/posts.service";

export let getPostsController = async (req: CustomRequest, resp: Response) => {
  let posts = await PostsService.getPosts({
    categorySlug: req.query.slug as string,
    authorId: req.query.authorId as any,
    tagId: req.query.tagId as any,
  });
  resp.send(posts);
};
