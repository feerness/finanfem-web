import { z } from "zod";

export const createForoSchema = z.object({
  title: z.string({
    required_error: "El título es requerido",
  }),
  description: z.string().optional(),
  date: z.string().datetime().optional(),
  user: z.string({
    required_error: "El usuario es requerido",
  }),
});

export const createCommentSchema = z.object({
  text: z
    .string({
      required_error: "El texto del comentario es requerido",
    })
    .min(1, "El comentario no puede estar vacío"),
  user: z.string({
    required_error: "El usuario es requerido",
  }),
});

