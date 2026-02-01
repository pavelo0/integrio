import { Link } from 'react-router-dom';

const Footer = () => {
  const columns = [
    {
      title: 'Навигация',
      links: [
        { label: 'Главная', href: '#hero', isRouter: false },
        { label: 'Демо', href: '#demo', isRouter: false },
        { label: 'Тарифы', href: '#pricing', isRouter: false },
        { label: 'О нас', href: '#about', isRouter: false },
      ],
    },
    {
      title: 'Аккаунт',
      links: [
        { label: 'Вход', href: '/login', isRouter: true },
        { label: 'Регистрация', href: '/register', isRouter: true },
      ],
    },
    {
      title: 'Правовое',
      links: [
        { label: 'Политика конфиденциальности', href: '#', isRouter: false },
        { label: 'Условия использования', href: '#', isRouter: false },
      ],
    },
  ];

  return (
    <footer
      className="py-16 border-t border-white/10"
      style={{ backgroundColor: 'var(--hero-bg)' }}
      aria-label="Подвал сайта"
    >
      <div className="container">
        <div className="flex justify-between items-start gap-12">
          <div className="shrink-0">
            <Link
              to="/"
              className="text-2xl font-semibold text-white tracking-tight hover:text-(--accent) transition-colors cursor-pointer"
            >
              Integrio
            </Link>
            <p className="mt-2 text-sm text-slate-400">AI-чат для бизнеса.</p>
          </div>

          <nav className="flex gap-12 shrink-0" aria-label="Ссылки в подвале">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2 list-none p-0 m-0">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.isRouter ? (
                        <Link
                          to={link.href}
                          className="text-sm text-slate-400 hover:text-(--accent) transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-slate-400 hover:text-(--accent) transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="shrink-0 w-[300px]">
            <label htmlFor="footer-email" className="text-sm font-semibold text-white block">
              Рассылка
            </label>
            <p className="mt-1 text-sm text-slate-400">Новости и обновления — раз в неделю.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                id="footer-email"
                type="email"
                placeholder="ваш@email.ru"
                className="flex-1 min-w-0 px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-500 border border-white/20 bg-white/5 focus:outline-none focus:border-(--accent)"
                aria-label="Email для рассылки"
              />
              <button
                type="submit"
                className="shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-900 bg-(--accent) hover:bg-(--accent-hover) transition-colors cursor-pointer"
              >
                Подписаться
              </button>
            </form>
          </div>
        </div>
        <p className="mt-12 pt-8 border-t border-white/10 text-sm text-slate-500">
          © {new Date().getFullYear()} Integrio. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
