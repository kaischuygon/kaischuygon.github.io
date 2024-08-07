import { defineCollection, reference, z } from 'astro:content';

const projectCollection = defineCollection({
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
	type: 'content',
	schema: z.object({
		title: z.string(),
		icon: z.string(),
		span: z.number().default(1),
		sortOrder: z.number().default(0),
	})
});

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		tags: z.array(z.string()),
		img: z.string().optional(),
		img_alt: z.string().optional(),
	})
});


export const collections = {
	'projects': projectCollection,
	'grid': gridCollection,
	'blog': blogCollection
};