import { z } from "zod";

// Definir el schema para validar el usuario
export const userSchema = z.object({
  username: z
    .string()
    .min(3, { message: "El nombre de usuario debe tener al menos 3 caracteres" })
    .max(20, { message: "El nombre de usuario no puede tener más de 20 caracteres" }),
  email: z
    .string()
    .email({ message: "El correo electrónico no es válido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
    .max(20, { message: "La contraseña no puede tener más de 20 caracteres" }),
});

// Tipo TypeScript inferido del schema
export type User = z.infer<typeof userSchema>;