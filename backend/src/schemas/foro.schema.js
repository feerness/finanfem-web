import { z } from "zod";

export const createForoSchema = z.object({
    title: z.string({
        required_error: 'El titulo es requerido',
    }),
    description: z.string().optional(),
    date: z.string().datetime().optional(),
    user: z.string({
        required_error: 'El ususario es requerido',
    })
});