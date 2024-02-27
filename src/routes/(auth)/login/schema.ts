import { z } from "zod";

export const formSchema = z.object({
	email: z
		.string()
		.min(3, { message: "Email is required" })
		.email({ message: "Email must be a valid email address" })
		.max(64, { message: "Email must be less than 64 characters" }),
	password: z
		.string()
		.min(1, { message: "Password is required" })
		.min(6, { message: "Password must be at least 6 characters" })
		.max(32, { message: "Password must be less than 32 characters" }),
});

export type FormSchema = typeof formSchema;
