import { Router } from "express";

import {
  createTag,
  getAllTags,
  getTagById,
  editTagById,
  deleteTagById,
} from "../controllers/tagsController"; //cambiar a ruta absoluta

const router = Router();

router.post("/tags", createTag);

router.get("/tags", getAllTags);

router.get("/tags/:id", getTagById);

router.put("/tags/:id", editTagById);

router.delete("/tags/:id", deleteTagById);

export default router;
