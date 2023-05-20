import { Router } from "express";
import { categoryRoutes } from "./category.routes";
import { postTagRoutes } from "./post-tags.routes";
import { postRoutes } from "./post.routes";
import { tagRoutes } from "./tag.routes";

export let routes = Router();

routes.use("/category", categoryRoutes);
routes.use("/post", postRoutes);
routes.use("/tag", tagRoutes);
routes.use("/post-tag", postTagRoutes);
