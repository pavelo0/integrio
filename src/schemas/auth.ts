import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().trim().min(1, 'Введите почту').email('Некорректный формат почты'),
  password: z.string().trim().min(1, 'Введите пароль'),
  rememberMe: z.boolean(),
});

const registerSchema = z
  .object({
    nickname: z
      .string()
      .trim()
      .min(3, 'Никнейм отсутствует или слишком короткий (мин. 3 символа)')
      .max(20, 'Слишком длинный никнейм (макс. 20 символов)'),
    email: z.string().trim().min(1, 'Введите почту').email('Некорректный формат почты'),
    password: z
      .string()
      .trim()
      .min(8, 'Пароль слишком короткий (мин. 8 символов)')
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, 'Пароль должен содержать буквы и цифры'),
    confirmPassword: z
      .string()
      .trim()
      .min(8, 'Пароль слишком короткий (мин. 8 символов)')
      .regex(/^(?=.*[A-Za-z])(?=.*\d)/, 'Пароль должен содержать буквы и цифры'),
    policyAgreement: z.boolean(),
    rememberMe: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  })
  .refine((data) => data.policyAgreement === true, {
    message: 'Нужно согласие с условиями использования',
    path: ['policyAgreement'],
  });

export { loginSchema, registerSchema };
export type Login = z.infer<typeof loginSchema>;
export type Register = z.infer<typeof registerSchema>;
