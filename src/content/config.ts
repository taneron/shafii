import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      published: z.boolean().default(false),
      author: z.string().default(SITE.author),
      date: z.date(),
      title: z.string(),
      postslug: z.string().optional(),
      featured: z.boolean().default(false),
      image: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      excerpt: z.string(),
    }),
});

export const collections = { posts };
