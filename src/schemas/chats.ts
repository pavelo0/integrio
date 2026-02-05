import { z } from 'zod';

const createChatSchema = z.object({
  chatName: z.string().trim().min(1, 'Введите название чата').max(25, 'Не более 25 символов'),
  domain: z.string().trim().max(50, 'Не более 50 символов'),
});

export { createChatSchema };
export type CreateChat = z.infer<typeof createChatSchema>;
