import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;
