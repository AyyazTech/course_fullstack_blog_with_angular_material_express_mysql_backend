import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostsService } from "../../services/posts.service";

export let getPostsController = async (req: CustomRequest, resp: Response) => {
  let posts = await PostsService.getPosts();
  resp.send(posts);
};
