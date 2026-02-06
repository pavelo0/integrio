import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';
import type { RootState } from '../store/store';

export const PricingPage = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
    logout();
    console.log(currentUser);
  };

  const plans = [
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
  ];

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12"
      style={{ backgroundColor: 'var(--hero-bg)' }}
    >
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10 flex flex-col items-center">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight">Выберите свой тариф</h1>
          <p className="mt-3 text-lg text-slate-400">
            Начните с Basic или выберите Pro для расширенных возможностей
          </p>

          {currentUser && (
            <div
              className="mt-6 inline-flex items-center gap-4 rounded-xl border px-5 py-3"
              style={{
                backgroundColor: 'var(--hero-bg-soft)',
                borderColor: 'rgba(255,255,255,0.1)',
              }}
            >
              <div className="text-left">
                <p className="text-sm text-slate-400">Вы вошли как</p>
                <p className="font-medium text-white">{currentUser.nickname}</p>
                <p className="text-sm text-slate-400">{currentUser.email}</p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
                onClick={handleClick}
              >
                Выйти
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-6 justify-center w-full">
          {plans.map((plan) => (
            <article
              key={plan.id}
              aria-labelledby={`plan-${plan.id}`}
              className="w-full max-w-[360px] rounded-2xl border p-8 flex flex-col"
              style={{
                backgroundColor: 'var(--hero-bg-soft)',
                borderColor: plan.highlighted ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                borderWidth: plan.highlighted ? 2 : 1,
              }}
            >
              <div className="flex items-center gap-2">
                <h3
                  id={`plan-${plan.id}`}
                  className={`text-2xl font-bold tracking-tight ${plan.highlighted ? 'text-(--accent)' : 'text-white'}`}
                >
                  {plan.name}
                </h3>
                {plan.highlighted && (
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full text-slate-900"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    Популярный
                  </span>
                )}
              </div>
              <p className="mt-2 text-slate-400 text-sm">{plan.description}</p>
              <p className="mt-4">
                <span
                  className={`text-2xl font-bold ${plan.highlighted ? 'text-(--accent)' : 'text-white'}`}
                >
                  {plan.price} ₽
                </span>
                <span className="text-slate-400 text-sm ml-1">{plan.period}</span>
              </p>
              <ul
                className="mt-6 space-y-2 list-none p-0 m-0"
                aria-label={`Возможности тарифа ${plan.name}`}
              >
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <span
                      className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-slate-900"
                      style={{ backgroundColor: 'var(--accent)' }}
                      aria-hidden
                    >
                      <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/service"
                className={`mt-8 py-3 rounded-xl text-center font-medium transition-colors block cursor-pointer ${
                  plan.highlighted
                    ? 'bg-(--accent) text-slate-900 hover:bg-(--accent-hover)'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/15'
                }`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
