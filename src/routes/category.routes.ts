import { Response, Router } from "express";
import { createCategoryController } from "../controllers/categories/create-category.controller";
import { deleteCategoryController } from "../controllers/categories/delete-category.controller";
import { getCategoriesController } from "../controllers/categories/get-categories.controller";
import { updateCategoryController } from "../controllers/categories/update-category.controller";
import { getCategoryBySlugController } from "../controllers/categories/get-category-by-slug.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export let categoryRoutes = Router();

categoryRoutes.post("", authMiddleware as any, createCategoryController as any);
categoryRoutes.delete(
  "/:categoryId",
  authMiddleware as any,
  deleteCategoryController as any
);
categoryRoutes.get("/slug/:slug", getCategoryBySlugController as any);
categoryRoutes.patch(
  "",
  authMiddleware as any,
  updateCategoryController as any
);
categoryRoutes.get("", getCategoriesController as any);
