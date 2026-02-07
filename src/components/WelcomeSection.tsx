import { MessageCircle, Send } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ backgroundColor: 'var(--hero-bg)' }}
      aria-labelledby="welcome-heading"
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
        <div className="flex-1 text-left hero-visual">
          <h1
            id="welcome-heading"
            className="text-5xl font-bold text-white leading-tight tracking-tight"
          >
            AI-chat для бизнеса.
            <br />
            <span className="text-(--accent)">Больше диалогов — больше сделок.</span>
          </h1>
          <p className="mt-6 text-xl text-slate-400 max-w-xl mx-0">
            Интегрируйте умный чат в сайт и мессенджеры. Отвечаем за вас 24/7, собираем лиды и
            ускоряем продажи.
          </p>
          <nav className="mt-10 flex flex-wrap gap-4 justify-start" aria-label="Основные действия">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium bg-(--accent) text-slate-900 hover:bg-(--accent-hover) transition-colors shadow-lg shadow-emerald-500/25 cursor-pointer"
            >
              Watch demo
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-white border border-slate-500 hover:border-slate-400 hover:bg-white/5 transition-colors cursor-pointer"
            >
              Discover
            </a>
          </nav>
        </div>

        <aside className="flex-1 flex justify-end w-full max-w-md" aria-label="Пример чата">
          <figure className="hero-levitate hero-visual w-full max-w-[320px] mr-14">
            <div
              className="relative rounded-3xl overflow-visible"
              style={{
                transform: 'perspective(250px) rotateY(-8deg) rotateX(4deg)',
                boxShadow:
                  '0 50px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), 0 0 80px -10px rgba(52, 211, 153, 0.15)',
              }}
            >
              <div
                className="rounded-3xl border border-white/10 overflow-hidden bg-slate-800/90 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(165deg, #334155 0%, #1e293b 40%, #0f172a 100%)',
                }}
              >
                <div className="px-5 pt-5 pb-4">
                  <div className="flex items-center gap-2 mb-4" aria-hidden="true">
                    <div className="w-10 h-10 rounded-xl bg-(--accent)/20 flex items-center justify-center">
                      <MessageCircle
                        className="w-5 h-5 text-(--accent)"
                        aria-hidden
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex-1">
                      <span
                        className="block h-2.5 w-20 rounded bg-slate-500/60"
                        aria-hidden="true"
                      />
                      <span
                        className="block h-2 w-14 rounded bg-slate-600/40 mt-1"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <ul className="space-y-3 list-none p-0 m-0" aria-label="Пример переписки">
                    <li className="flex justify-start">
                      <p className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-slate-600/50 text-slate-300 text-sm max-w-[85%] m-0">
                        Привет! Чем могу помочь?
                      </p>
                    </li>
                    <li className="flex justify-end">
                      <p className="rounded-2xl rounded-br-md px-4 py-2.5 bg-(--accent)/90 text-slate-900 text-sm font-medium max-w-[85%] m-0">
                        Нужна консультация по тарифу
                      </p>
                    </li>
                    <li className="flex justify-start">
                      <p className="rounded-2xl rounded-bl-md px-4 py-2.5 bg-slate-600/50 text-slate-300 text-sm max-w-[80%] m-0">
                        Конечно, вот информация по тарифам...
                      </p>
                    </li>
                  </ul>
                  <div className="mt-4 flex gap-2" aria-hidden="true">
                    <span className="flex-1 h-9 rounded-xl bg-slate-600/40" />
                    <span className="w-9 h-9 rounded-xl bg-(--accent) flex items-center justify-center">
                      <Send className="w-4 h-4 text-slate-900" aria-hidden strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </aside>
      </div>
    </section>
  );
};

export default WelcomeSection;
