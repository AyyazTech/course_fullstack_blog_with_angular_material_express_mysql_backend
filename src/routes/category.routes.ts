import { Response, Router } from "express";
import { createCategoryController } from "../controllers/categories/create-category.controller";
import { deleteCategoryController } from "../controllers/categories/delete-category.controller";
import { getCategoriesController } from "../controllers/categories/get-categories.controller";
import { updateCategoryController } from "../controllers/categories/update-category.controller";
import { getCategoryBySlugController } from "../controllers/categories/get-category-by-slug.controller";

export let categoryRoutes = Router();

categoryRoutes.post("", createCategoryController as any);
categoryRoutes.delete("/:categoryId", deleteCategoryController as any);
categoryRoutes.get("/slug/:slug", getCategoryBySlugController as any);
categoryRoutes.patch("", updateCategoryController as any);
categoryRoutes.get("", getCategoriesController as any);
