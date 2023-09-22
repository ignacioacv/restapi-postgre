import { Request, Response } from "express";

import { Post } from "../models/postModel";
import { Comments } from "../models/commentsModel";

// Obtener todos los Posts
export const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el Post" });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  const postId = parseInt(req.params.id, 10);
  try {
    const posts = await Post.findByPk(postId);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el Post" });
  }
};

// Crear un nuevo Post
export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  try {
    const newPost = await Post.create({ title, content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear el Post" });
  }
};

// Actualizar un Post por su ID
export const editPostById = async (req: Request, res: Response) => {
  const postId = parseInt(req.params.id, 10);
  const { title, text } = req.body;

  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    await post.update({ title, text });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar el Post" });
  }
};

// Eliminar un Post por su ID
export const deletePostById = async (req: Request, res: Response) => {
  const postId = parseInt(req.params.id, 10);

  try {
    const post = await Post.findByPk(postId);
    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    await post.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar el Post" });
  }
};

//Buscar un post con su comentario
export const getPostComments = async (req: Request, res: Response) => {
  const postId = parseInt(req.params.id, 10);
  try {
    const pComments = await Comments.findAll({
      where: { postId: postId },
    });
    res.json(pComments);
  } catch (error) {
    res.status(500).json({ error: "Ocurrio un error" });
  }
};
