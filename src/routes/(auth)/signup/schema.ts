import { z } from "zod";

export const languages = {
	en: "English",
	es: "Spanish",
	fr: "French",
	de: "German",
	it: "Italian",
	pt: "Portuguese",
	ru: "Russian",
	zh: "Chinese",
	ja: "Japanese",
	ko: "Korean",
} as const;

type Language = keyof typeof languages;

export const formSchema = z.object({
	email: z
		.string()
		.min(3, { message: "Email is required" })
		.email({ message: "Email must be a valid email address" })
		.max(64, { message: "Email must be less than 64 characters" }),
	password: z
		.string()
		.min(1, { message: "Password is required" })
		.min(6, { message: "Password must be at least 8 characters" })
		.max(32, { message: "Password must be less than 32 characters" }),
	language: z
		.enum(Object.keys(languages) as [Language, ...Language[]])
		.default("en"),
});

export type FormSchema = typeof formSchema;
