import z from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  content: z.string().min(1, "Content is required"),
  thumbnail: z.instanceof(File, { message: "Thumbnail must be a file" }),
});

export type CreateBlogSchema = z.infer<typeof createBlogSchema>;
