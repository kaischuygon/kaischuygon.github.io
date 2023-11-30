import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string(),
		img_alt: z.string().optional(),
	})
});

const gridCollection = defineCollection({
	type: 'content', // v2.5.0 and later
	schema: z.object({
		title: z.string(),
		icon: z.string(),
		span: z.array(z.number().or(z.string())),
		sortOrder: z.number()
	})
});

export const collections = {
	'work': workCollection,
	'grid': gridCollection,
};