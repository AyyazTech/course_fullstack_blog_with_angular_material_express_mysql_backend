import { Router } from "express";
import { createPostController } from "../controllers/posts/create-post.controller";
import { deletePostController } from "../controllers/posts/delete-post.controller";
import { getPostsController } from "../controllers/posts/get-posts.controller";
import { updatePostController } from "../controllers/posts/update-post.controller";

export let postRoutes = Router();

postRoutes.post("", createPostController as any);
postRoutes.get("", getPostsController as any);
postRoutes.patch("", updatePostController as any);
postRoutes.delete("/:id", deletePostController as any);
