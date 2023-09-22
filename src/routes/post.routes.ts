import { Router } from "express";

import {
  createPost,
  getAllPosts,
  getPostById,
  editPostById,
  deletePostById,
  getPostComments,
} from "../controllers/postController"; //cambiar a ruta absoluta

const router = Router();

router.post("/posts", createPost);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getPostById);
router.put("/posts/:id", editPostById);
router.delete("/posts/:id", deletePostById);

router.get("/:id/comments", getPostComments);

export default router;
