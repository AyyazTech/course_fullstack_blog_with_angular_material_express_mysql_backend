import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostTagsService } from "../../services/post-tags.service";

export let deletePostTagController = async (
  req: CustomRequest,
  resp: Response
) => {
  let id: any = req.params.id;

  await PostTagsService.deletePostTag(id);

  resp.send("Deleted successfully");
};
