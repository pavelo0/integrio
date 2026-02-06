export const SUBSCRIPTION_PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: '2 000',
    period: 'в месяц',
    description: 'Для малого бизнеса и тестов. Один сайт, до 1 000 диалогов.',
    features: [
      'Виджет на один сайт',
      'До 1 000 диалогов в месяц',
      'Базовые настройки чата',
      'Email-поддержка',
    ],
    cta: 'Начать с Basic',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '4 200',
    period: 'в месяц',
    description: 'Для роста продаж. Несколько сайтов, мессенджеры, приоритетная поддержка.',
    features: [
      'Неограниченно сайтов',
      'До 10 000 диалогов',
      'Telegram и WhatsApp',
      'Приоритетная поддержка',
      'Кастомный тон и сценарии',
    ],
    cta: 'Выбрать Pro',
    highlighted: true,
  },
] as const;

export type PlanId = (typeof SUBSCRIPTION_PLANS)[number]['id'];
