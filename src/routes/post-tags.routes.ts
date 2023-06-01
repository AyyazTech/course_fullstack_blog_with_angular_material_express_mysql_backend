import { Router } from "express";
import { createPostTagController } from "../controllers/post-tags/create-post-tag.controller";
import { deletePostTagController } from "../controllers/post-tags/delete-post-tag.controller";
import { getPostTagsController } from "../controllers/post-tags/get-post-tags.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export let postTagRoutes = Router();

postTagRoutes.post("", authMiddleware as any, createPostTagController as any);
postTagRoutes.delete(
  "/:id",
  authMiddleware as any,
  deletePostTagController as any
);
postTagRoutes.get("", getPostTagsController as any);
