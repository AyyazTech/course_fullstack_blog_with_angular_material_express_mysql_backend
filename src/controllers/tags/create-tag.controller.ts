import { Response } from "express";
import { CustomRequest } from "../../server";
import { TagsService } from "../../services/tags.service";

export let createTagController = async (req: CustomRequest, resp: Response) => {
  let title = req.body.title;

  let response: any = await TagsService.createTag(title);
  let tagId = response.insertId;
  let tag: any = await TagsService.getTagId(tagId);
  resp.send(tag);
};
