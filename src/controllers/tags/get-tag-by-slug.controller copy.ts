import { Response } from "express";
import { CustomRequest } from "../../server";
import { TagsService } from "../../services/tags.service";

export let getTagBySlugController = async (
  req: CustomRequest,
  resp: Response
) => {
  let tag = await TagsService.getTagBySlug(req.params.slug);

  resp.send(tag);
};
