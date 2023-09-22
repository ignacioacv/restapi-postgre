import { Request, Response } from "express";

import { Tag } from "../models/tagsModel";

// Obtener todas las etiquetas
export const getAllTags = async (_req: Request, res: Response) => {
  try {
    const getTags = await Tag.findAll();
    res.json(getTags);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las etiquetas" });
  }
};

export const getTagById = async (req: Request, res: Response) => {
  const tagId = parseInt(req.params.id, 10);
  try {
    const etiquetas = await Tag.findByPk(tagId);
    res.json(etiquetas);
  } catch (error) {
    res.status(500).json({ error: "No se pudieron obtener las etiquetas" });
  }
};

// Crear una nueva etiqueta
export const createTag = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newTag = await Tag.create({ name });
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ error: "No se pudo crear la etiqueta" });
  }
};

// Actualizar una etiqueta por su ID
export const editTagById = async (req: Request, res: Response) => {
  const tagId = parseInt(req.params.id, 10);
  const { name } = req.body;

  try {
    const editedTag = await Tag.findByPk(tagId);
    if (!editedTag) {
      return res.status(404).json({ error: "Etiqueta no encontrada" });
    }

    await editedTag.update({ name });
    res.json(editedTag);
  } catch (error) {
    res.status(500).json({ error: "No se pudo actualizar la etiqueta" });
  }
};

// Eliminar una etiqueta por su ID
export const deleteTagById = async (req: Request, res: Response) => {
  const tagId = parseInt(req.params.id, 10);

  try {
    const deleteTag = await Tag.findByPk(tagId);
    if (!deleteTag) {
      return res.status(404).json({ error: "Etiqueta no encontrada" });
    }

    await deleteTag.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "No se pudo eliminar la etiqueta" });
  }
};
