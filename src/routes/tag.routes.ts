import { Router } from "express";
import { createTagController } from "../controllers/tags/create-tag.controller";
import { deleteTagController } from "../controllers/tags/delete-tag.controller";
import { getTagsController } from "../controllers/tags/get-tags.controller";
import { updateTagController } from "../controllers/tags/update-tag.controller";

export let tagRoutes = Router();

tagRoutes.post("", createTagController as any);
tagRoutes.delete("/:tagId", deleteTagController as any);
tagRoutes.patch("", updateTagController as any);
tagRoutes.get("", getTagsController as any);
