import { MessageCircle, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const DemoSection = () => {
  return (
    <section
      id="demo"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: 'var(--hero-bg-soft)' }}
      aria-labelledby="demo-heading"
    >
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10 flex flex-row items-center gap-16 py-16">
        <div className="flex-1 text-left max-w-xl">
          <h2 id="demo-heading" className="text-3xl font-bold text-white tracking-tight">
            Попробуйте <span className="text-(--accent)">сами</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 leading-relaxed">
            No-code платформа: за 5 минут вы собираете свой чат — свои цвета, лого и контекст для
            ответов — и получаете уникальную ссылку-интегратор для сайта.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Задайте вопрос или оформите заказ — получите универсальный ответ сразу, без
            человеческого фактора и без форм с телефоном.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Проще и выгоднее, чем живые операторы: без ожидания, без кривизны внедрения.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-slate-900 bg-(--accent) hover:bg-(--accent-hover) transition-colors cursor-pointer"
          >
            Попробовать
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <aside
          className="flex-1 flex justify-center items-center relative w-full max-w-md"
          aria-label="Пример чата"
        >
          <div
            className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-(--accent) font-medium whitespace-nowrap z-10"
            style={{
              fontFamily: 'cursive',
              transform: 'translateY(-50%) rotate(-8deg)',
              textShadow: '0 0 20px rgba(52, 211, 153, 0.3)',
            }}
          >
            {/* <span className="text-xl">test it</span>
            <svg
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
            </svg> */}
          </div>
          <figure
            className="ml-32 w-full max-w-[320px] rounded-3xl overflow-hidden"
            aria-label="Пример чата"
          >
            <div
              className="rounded-3xl border border-white/10 overflow-hidden"
              style={{
                background: 'linear-gradient(165deg, #334155 0%, #1e293b 40%, #0f172a 100%)',
                boxShadow:
                  '0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06), 0 0 40px -10px rgba(52, 211, 153, 0.15)',
              }}
            >
              <div className="pl-7 pr-5 pt-8 pb-6">
                <div className="flex items-center gap-2 mb-5" aria-hidden="true">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <MessageCircle className="w-5 h-5 text-slate-900" aria-hidden strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <span className="block h-2.5 w-20 rounded bg-slate-500/60" aria-hidden="true" />
                    <span
                      className="block h-2 w-14 rounded bg-slate-600/40 mt-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <ul className="space-y-5 list-none p-0 m-0" aria-label="Пример переписки">
                  <li className="flex justify-start">
                    <p className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-slate-600/50 text-slate-300 text-sm max-w-[85%] m-0">
                      Чем могу помочь?
                    </p>
                  </li>
                  <li className="flex justify-end">
                    <p
                      className="rounded-2xl rounded-br-md px-4 py-2.5 text-slate-900 text-sm font-medium max-w-[85%] m-0"
                      style={{ backgroundColor: 'var(--accent)' }}
                    >
                      Хочу заказать
                    </p>
                  </li>
                  <li className="flex justify-start">
                    <p className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-slate-600/50 text-slate-300 text-sm max-w-[80%] m-0">
                      Отлично! Опишите, что нужно — отвечу сразу.
                    </p>
                  </li>
                  <li className="flex justify-end">
                    <p
                      className="rounded-2xl rounded-br-md px-4 py-2.5 text-slate-900 text-sm font-medium max-w-[85%] m-0"
                      style={{ backgroundColor: 'var(--accent)' }}
                    >
                      Спасибо!
                    </p>
                  </li>
                </ul>
                <div className="mt-5 flex gap-2" aria-hidden="true">
                  <span className="flex-1 h-9 rounded-xl bg-slate-600/40" />
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'var(--accent)' }}
                  >
                    <Send className="w-4 h-4 text-slate-900" aria-hidden strokeWidth={2} />
                  </span>
                </div>
              </div>
            </div>
          </figure>
        </aside>
      </div>
    </section>
  );
};

export default DemoSection;
