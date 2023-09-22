import { Request, Response } from "express";

import { PostTag } from "../models/postTagsModel";

// Obtener todas las etiquetas
export const getAllPostTags = async (_req: Request, res: Response) => {
  try {
    const getPostTags = await PostTag.findAll();
    res.json(getPostTags);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las etiquetas" });
  }
};

export const getPostTagById = async (req: Request, res: Response) => {
  const etiquetaId = parseInt(req.params.id, 10);
  try {
    const getPostTag = await PostTag.findByPk(etiquetaId);
    res.json(getPostTag);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las etiquetas" });
  }
};

// Crear una nueva etiqueta
export const createPostTag = async (req: Request, res: Response) => {
  const { PostId, etiquetaId } = req.body;

  try {
    const newPostTag = await PostTag.create({ PostId, etiquetaId });
    res.status(201).json(newPostTag);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear la etiqueta" });
  }
};

// Actualizar una etiqueta por su ID
export const editPostTagById = async (req: Request, res: Response) => {
  const postTagId = parseInt(req.params.id, 10);
  const { PostId, etiquetaId } = req.body;
  try {
    const editTag = await PostTag.findByPk(postTagId);
    if (!editTag) {
      return res.status(404).json({ error: "Etiqueta no encontrada" });
    }

    await editTag.update({ PostId, etiquetaId });
    res.json(editTag);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar la etiqueta" });
  }
};

// Eliminar una etiqueta por su ID
export const deletePostTagById = async (req: Request, res: Response) => {
  const tagId = parseInt(req.params.id, 10);

  try {
    const deleteTag = await PostTag.findByPk(tagId);
    if (!deleteTag) {
      return res.status(404).json({ error: "Etiqueta no encontrada" });
    }
    await deleteTag.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar la etiqueta" });
  }
};
