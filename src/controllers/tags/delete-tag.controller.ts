import { Response } from "express";
import { CustomRequest } from "../../server";
import { TagsService } from "../../services/tags.service";

export let deleteTagController = async (req: CustomRequest, resp: Response) => {
  let id = req.params.tagId;

  await TagsService.deleteTag(id);

  resp.send("Tags has been deleted");
};
