const AdvantagesSection = () => {
  const items = [
    {
      title: 'Работает 24/7',
      description:
        'Чат отвечает на вопросы и собирает лиды круглосуточно. Вы занимаетесь сделками — мы обрабатываем входящие.',
      icon: (
        <svg
          className="w-8 h-8 text-(--accent)"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Один виджет — сайт и мессенджеры',
      description:
        'Подключайте чат на сайт и в Telegram, WhatsApp. Один бренд, одна настройка, единая аналитика.',
      icon: (
        <svg
          className="w-8 h-8 text-(--accent)"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      title: 'Настройка под ваш бизнес',
      description:
        'Тон задаёте вы: приветствие, тон, ответы на частые вопросы. Виджет ведёт диалог так, как нужно вам.',
      icon: (
        <svg
          className="w-8 h-8 text-(--accent)"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
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
