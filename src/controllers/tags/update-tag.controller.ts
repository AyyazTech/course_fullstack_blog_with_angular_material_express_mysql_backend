import { Response } from "express";
import { CustomRequest } from "../../server";
import { TagsService } from "../../services/tags.service";

export let updateTagController = async (req: CustomRequest, resp: Response) => {
  let title = req.body.title;
  let id = req.body.id;

  await TagsService.updateTag(title, id);

  resp.send("Tags has been updated");
};
