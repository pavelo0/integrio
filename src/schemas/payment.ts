import { z } from 'zod';

const paymentSchema = z.object({
  cardNumber: z
    .string()
    .trim()
    .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Неверный формат карты'),
  cvc: z
    .string()
    .trim()
    .regex(/^\d{3,4}$/, '3 или 4 цифры'),
  expiry: z
    .string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Формат MM/YY'),
  placeholder: z
    .string()
    .trim()
    .min(2, 'Минимум 2 символа')
    .regex(/^[a-zA-Z\s]+$/, 'Только латинские буквы'),
});

export { paymentSchema };
export type Payment = z.infer<typeof paymentSchema>;
