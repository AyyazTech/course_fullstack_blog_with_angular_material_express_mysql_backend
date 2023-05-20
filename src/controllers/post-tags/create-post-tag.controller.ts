import { Response } from "express";
import { CustomRequest } from "../../server";
import { PostTagsService } from "../../services/post-tags.service";

export let createPostTagController = async (
  req: CustomRequest,
  resp: Response
) => {
  let tagId = req.body.tagId;
  let postId = req.body.postId;

  let response: any = await PostTagsService.createPostTag(postId, tagId);
  let postTagId = response.insertId;
  let postTag: any = await PostTagsService.getPostTagsById(postTagId);
  resp.send(postTag);
};
