import { defineCollection, z } from "astro:content";

const tipsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // ...otros campos
  }),
});

export const collections = {
  tips: tipsCollection,
};