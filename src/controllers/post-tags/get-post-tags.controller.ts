import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostTagsService } from "../../services/post-tags.service";

export let getPostTagsController = async (
  req: CustomRequest,
  resp: Response
) => {
  let postTags = await PostTagsService.getPostTags();

  resp.send(postTags);
};
