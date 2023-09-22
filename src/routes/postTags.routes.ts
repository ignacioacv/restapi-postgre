import { Router } from "express";

import {
  createPostTag,
  getAllPostTags,
  getPostTagById,
  editPostTagById,
  deletePostTagById,
} from "../controllers/postTagsController"; //cambiar a ruta absoluta

const router = Router();

router.post("/postags", createPostTag);

router.get("/postags", getAllPostTags);

router.get("/postags/:id", getPostTagById);

router.put("/postags/:id", editPostTagById);

router.delete("/postags/:id", deletePostTagById);

export default router;
