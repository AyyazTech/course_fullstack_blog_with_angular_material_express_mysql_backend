import { Response } from "express";
import { CustomRequest } from "../../server";
import { TagsService } from "../../services/tags.service";

export let getTagsByPostIdController = async (
  req: CustomRequest,
  resp: Response
) => {
  let tags = await TagsService.getTagsByPostId(req.params.postId);

  resp.send(tags);
};
