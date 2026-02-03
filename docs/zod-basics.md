# Zod — базовые функции и примеры

Краткий справочник по основным возможностям Zod с примерами.

---

## Импорт

```ts
import { z } from 'zod';
```

---

## 1. Примитивы

### string

```ts
z.string(); // любая строка
z.string().optional(); // string | undefined
z.string().nullable(); // string | null
z.string().default('hello'); // если undefined → 'hello'
```

### number

```ts
z.number(); // любое число (в т.ч. NaN, Infinity)
z.number().finite(); // исключает NaN, Infinity
z.number().int(); // только целые
z.number().positive(); // > 0
z.number().nonnegative(); // >= 0
z.number().negative(); // < 0
z.number().min(0); // >= 0
z.number().max(100); // <= 100
z.number().multipleOf(5); // кратно 5
```

Примеры:

```ts
const age = z.number().int().min(0).max(120);
const percent = z.number().min(0).max(100);
```

### boolean

```ts
z.boolean();
z.boolean().default(false);
```

### date

```ts
z.date(); // экземпляр Date
z.coerce.date(); // строку/число преобразует в Date
```

### null / undefined

```ts
z.null();
z.undefined();
```

### literal — ровно одно значение

```ts
z.literal('admin'); // только строка 'admin'
z.literal(42); // только число 42
z.literal(true); // только true (удобно для чекбокса «согласен»)
```

---

## 2. Строка — валидаторы и сообщения

### Длина

```ts
z.string().min(1, 'Не может быть пустым');
z.string().min(2, 'Минимум 2 символа');
z.string().max(100, 'Максимум 100 символов');
z.string().length(6, 'Ровно 6 символов');
```

### Email

```ts
z.string().email(); // дефолтное сообщение
z.string().email('Некорректный email');
z.string().min(1, 'Введите email').email('Некорректный формат');
```

### URL

```ts
z.string().url('Некорректная ссылка');
```

### UUID

```ts
z.string().uuid('Некорректный UUID');
```

### Регулярное выражение (pattern)

```ts
z.string().regex(/^[a-zA-Z0-9_]+$/, 'Только латиница, цифры и _');
z.string().regex(/^\d+$/, 'Только цифры');
z.string().regex(/^\+?[\d\s-()]+$/, 'Некорректный телефон');
```

Пароль «буквы + цифры»:

```ts
z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)/, 'Пароль должен содержать буквы и цифры');
```

### Начало / конец строки

```ts
z.string().startsWith('https://', 'Должен начинаться с https://');
z.string().endsWith('.pdf', 'Должен заканчиваться на .pdf');
```

### Включение подстроки

```ts
z.string().includes('@', 'Должен содержать @');
```

### Trim (без пробелов по краям)

```ts
z.string().trim(); // валидация после обрезки пробелов
z.string().transform((s) => s.trim()); // сохранить обрезанное значение
```

### Непустая строка после trim

```ts
z.string().trim().min(1, 'Не может быть пустым');
```

---

## 3. Число — уточнения

```ts
z.number().min(0, 'Не меньше 0');
z.number().max(100, 'Не больше 100');
z.number().int('Должно быть целое число');
z.number().positive('Должно быть положительным');
z.number().multipleOf(0.01, 'Максимум 2 знака после запятой');
```

### Coerce — строка → число

```ts
z.coerce.number(); // "42" → 42, "3.14" → 3.14
z.coerce.number().int().min(0).max(100);
```

---

## 4. Объект (object)

### Базовый объект

```ts
const userSchema = z.object({
  name: z.string().min(1),
  age: z.number().int().min(0),
  email: z.string().email(),
});

type User = z.infer<typeof userSchema>;
// { name: string; age: number; email: string }
```

### Вложенные объекты

```ts
const schema = z.object({
  user: z.object({
    login: z.string(),
    role: z.enum(['admin', 'user']),
  }),
});
```

### .shape — доступ к полям

```ts
userSchema.shape.name; // z.ZodString
userSchema.shape.age; // z.ZodNumber
```

### .extend — добавить поля

```ts
const extended = userSchema.extend({
  id: z.number(),
  createdAt: z.date(),
});
```

### .pick / .omit — часть полей

```ts
const onlyName = userSchema.pick({ name: true });
const withoutAge = userSchema.omit({ age: true });
```

### .partial / .required

```ts
userSchema.partial(); // все поля optional
userSchema.required(); // все поля обязательны (по умолчанию так и есть)
```

### .strict() — запрет лишних ключей

```ts
z.object({ a: z.number() }).strict();
// { a: 1, b: 2 } → ошибка, т.к. b лишний
```

---

## 5. Массив (array)

```ts
z.array(z.string()); // string[]
z.array(z.number()).min(1, 'Выберите хотя бы один');
z.array(z.string()).max(5, 'Максимум 5 элементов');
z.array(z.string()).length(3, 'Ровно 3 элемента');
```

Тип элемента — любая схема:

```ts
z.array(z.object({ id: z.number(), name: z.string() }));
```

### .nonempty

```ts
z.array(z.string()).nonempty('Массив не может быть пустым');
```

---

## 6. Union (или одно, или другое)

```ts
z.union([z.string(), z.number()]); // string | number
z.union([z.literal('draft'), z.literal('published')]);
```

Синтаксис через .or():

```ts
z.string().or(z.number());
```

---

## 7. Enum и literal

### enum из строк

```ts
const status = z.enum(['draft', 'published', 'archived']);
// 'draft' | 'published' | 'archived'
```

### enum из TypeScript

```ts
enum Role {
  Admin = 'admin',
  User = 'user',
}
const roleSchema = z.nativeEnum(Role);
```

### несколько literal

```ts
const status = z.union([z.literal('draft'), z.literal('published'), z.literal('archived')]);
// то же по смыслу, что z.enum([...])
```

---

## 8. Optional, nullable, default

```ts
z.string().optional(); // string | undefined
z.string().nullable(); // string | null
z.string().optional().nullable();
z.string().default('hello'); // если пришло undefined → подставится 'hello'
```

В объекте:

```ts
z.object({
  name: z.string(),
  nickname: z.string().optional(),
  deletedAt: z.date().nullable(),
  role: z.enum(['user', 'admin']).default('user'),
});
```

---

## 9. Refine — своя проверка

Одна проверка на одно значение:

```ts
z.string().refine((val) => val.length >= 8, 'Минимум 8 символов');
z.number().refine((n) => n % 2 === 0, 'Должно быть чётным');
```

Несколько проверок с разными сообщениями:

```ts
z.string()
  .refine((val) => val.length >= 8, 'Минимум 8 символов')
  .refine((val) => /[A-Z]/.test(val), 'Хотя бы одна заглавная')
  .refine((val) => /\d/.test(val), 'Хотя бы одна цифра');
```

Refine на объекте (несколько полей):

```ts
z.object({
  password: z.string(),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Пароли не совпадают',
  path: ['confirmPassword'], // ошибка привяжется к этому полю
});
```

Чекбокс «согласен с условиями»:

```ts
z.object({
  terms: z.boolean(),
}).refine((data) => data.terms === true, {
  message: 'Нужно согласие с условиями',
  path: ['terms'],
});
```

---

## 10. Transform — изменить значение

После успешной валидации значение подменяется:

```ts
z.string().transform((val) => val.trim());
z.string().transform((val) => val.toLowerCase());
z.coerce.number(); // по сути transform: строка → число
z.coerce.boolean(); // "true", 1 → true
```

Цепочка: валидация → transform:

```ts
z.string()
  .min(1)
  .transform((s) => s.trim())
  .refine((s) => s.length >= 2, 'Минимум 2 символа после обрезки пробелов');
```

---

## 11. Сообщения об ошибках

Второй аргумент у многих методов — сообщение:

```ts
z.string().min(1, 'Поле обязательно');
z.string().email('Некорректный email');
z.number().min(0, 'Не меньше нуля');
```

Кастомные ошибки для объекта (errorMap):

```ts
z.object({
  name: z.string({ required_error: 'Введите имя', invalid_type_error: 'Имя должно быть строкой' }),
});
```

---

## 12. Использование: parse / safeParse

```ts
const schema = z.object({ email: z.string().email(), age: z.number() });

// Выбросит ошибку при невалидных данных
const data = schema.parse({ email: 'a@b.com', age: 25 });

// Не бросает, возвращает { success: true, data } или { success: false, error }
const result = schema.safeParse({ email: 'invalid', age: 25 });
if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error.flatten());
}
```

React Hook Form через `@hookform/resolvers/zod` сам вызывает что-то вроде safeParse и кладёт ошибки в `formState.errors`.

---

## 13. Тип из схемы

```ts
type User = z.infer<typeof userSchema>;
// или
type User = z.output<typeof userSchema>;
```

`z.infer` — тип того, что ты передаёшь в parse.  
`z.output` — тип после transform (если есть). Обычно для форм достаточно `z.infer`.

---

## 14. Примеры под типичные поля формы

```ts
// Email
z.string().min(1, 'Введите email').email('Некорректный формат');

// Пароль (базово)
z.string().min(6, 'Минимум 6 символов');

// Пароль (строже: буквы + цифры)
z.string()
  .min(8, 'Минимум 8 символов')
  .regex(/^(?=.*[A-Za-z])(?=.*\d)/, 'Нужны буквы и цифры');

// Имя (никнейм)
z.string().min(1, 'Введите имя').min(2, 'Минимум 2 символа');

// Телефон
z.string()
  .regex(/^\+?[\d\s-()]+$/, 'Некорректный телефон')
  .min(10, 'Слишком короткий');

// Чекбокс «согласен»
z.boolean();
// + .refine на объекте: data.terms === true

// Выбор из списка
z.enum(['option1', 'option2'], { required_error: 'Выберите значение' });
```

Если нужно, могу вынести в отдельный файл только примеры под твои поля (логин/регистрация) и привязать к твоему `auth.ts`.
