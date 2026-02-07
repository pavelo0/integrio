import { Clock, MessageCircle, Settings } from 'lucide-react';

const AdvantagesSection = () => {
  const iconClass = 'w-8 h-8 text-(--accent)';
  const items = [
    {
      title: 'Работает 24/7',
      description:
        'Чат отвечает на вопросы и собирает лиды круглосуточно. Вы занимаетесь сделками — мы обрабатываем входящие.',
      icon: <Clock className={iconClass} aria-hidden strokeWidth={2} />,
    },
    {
      title: 'Один виджет — сайт и мессенджеры',
      description:
        'Подключайте чат на сайт и в Telegram, WhatsApp. Один бренд, одна настройка, единая аналитика.',
      icon: <MessageCircle className={iconClass} aria-hidden strokeWidth={2} />,
    },
    {
      title: 'Настройка под ваш бизнес',
      description:
        'Тон задаёте вы: приветствие, тон, ответы на частые вопросы. Виджет ведёт диалог так, как нужно вам.',
      icon: <Settings className={iconClass} aria-hidden strokeWidth={2} />,
    },
  ];

  return (
    <section
      id="about"
      className="relative py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--hero-bg-soft)' }}
      aria-labelledby="advantages-heading"
    >
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10">
        <h2 id="advantages-heading" className="text-3xl font-bold text-white tracking-tight">
          Почему <span className="text-(--accent)">Integrio</span>
        </h2>
        <p className="mt-3 text-lg text-slate-400 max-w-2xl">
          Чат с ИИ, который реально помогает продавать и не отвлекает от вашего стиля.
        </p>

        <div className="mt-16 grid grid-cols-3 gap-8">
          {items.map((item, i) => (
            <article
              key={i}
              className="relative rounded-3xl border border-white/10 overflow-hidden p-8 transition-colors hover:border-white/20"
              style={{
                background: 'linear-gradient(165deg, #334155 0%, #1e293b 40%, #0f172a 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-(--accent)/20 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight">{item.title}</h3>
              <p className="mt-3 text-slate-400 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
