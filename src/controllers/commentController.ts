import { Request, Response } from "express";

import { Comments } from "../models/commentsModel";

// Obtener todos los comentarios
export const getComments = async (_req: Request, res: Response) => {
  try {
    const comentarios = await Comments.findAll();
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener los comentarios" });
  }
};

// Obtener todos los comentarios
export const getCommentById = async (req: Request, res: Response) => {
  const comentarioId = parseInt(req.params.id, 10);

  try {
    const comentarios = await Comments.findByPk(comentarioId);
    res.json(comentarios);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener los comentarios" });
  }
};

// Crear un nuevo comentario
export const createComment = async (req: Request, res: Response) => {
  try {
    const { text, postId } = req.body;
    const newComment = await Comments.create({ text, postId });
    res.json(newComment);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "No se pudo actualizar el comentario" });
  }
};

// Actualizar un comentario por su ID
export const editCommentById = async (req: Request, res: Response) => {
  const comentarioId = parseInt(req.params.id, 10);
  const { text, postId } = req.body;

  try {
    const comentario = await Comments.findByPk(comentarioId);
    if (!comentario) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    await comentario.update({ text, postId });
    res.json(comentario);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar el comentario" });
  }
};

// Eliminar un comentario por su ID
export const deleteCommentById = async (req: Request, res: Response) => {
  const comentarioId = parseInt(req.params.id, 10);

  try {
    const comentario = await Comments.findByPk(comentarioId);
    if (!comentario) {
      return res.status(404).json({ error: "Comentario no encontrado" });
    }

    await comentario.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar el comentario" });
  }
};
