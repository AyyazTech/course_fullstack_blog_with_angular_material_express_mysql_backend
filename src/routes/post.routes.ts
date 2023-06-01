import { Router } from "express";
import { createPostController } from "../controllers/posts/create-post.controller";
import { deletePostController } from "../controllers/posts/delete-post.controller";
import { getPostsController } from "../controllers/posts/get-posts.controller";
import { updatePostController } from "../controllers/posts/update-post.controller";
import { getPostBySlugController } from "../controllers/posts/get-post-by-slug.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export let postRoutes = Router();

postRoutes.post("", authMiddleware as any, createPostController as any);
postRoutes.get("", getPostsController as any);
postRoutes.get("/slug/:slug", getPostBySlugController as any);
postRoutes.patch("", authMiddleware as any, updatePostController as any);
postRoutes.delete("/:id", authMiddleware as any, deletePostController as any);
