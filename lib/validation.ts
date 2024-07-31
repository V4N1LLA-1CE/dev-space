import * as z from "zod";

export const QuestionFormSchema = z.object({
  title: z.string().min(5).max(135),
  explanation: z.string().min(20),
  tags: z
    .array(z.string().min(2).max(15))
    .min(1, "Must contain at least one tag")
    .max(3, "Max tag limit exceeded (3)"),
});
