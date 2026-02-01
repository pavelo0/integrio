import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (hash: string) => (e: React.MouseEvent) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate(`/#${hash}`);
    }
  };

  return (
    <header className="header-plank h-16 flex items-center px-6" aria-label="Шапка сайта">
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-semibold text-white tracking-tight hover:text-(--accent) transition-colors cursor-pointer"
        >
          Integrio
        </Link>

        <nav aria-label="Основная навигация">
          <ul className="flex items-center gap-5">
            <li>
              <a
                href="#hero"
                className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={handleNavigation('hero')}
              >
                Главная
              </a>
            </li>
            <li>
              <a
                href="#demo"
                className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={handleNavigation('demo')}
              >
                Демо
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={handleNavigation('pricing')}
              >
                Тарифы
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={handleNavigation('about')}
              >
                О нас
              </a>
            </li>
            <li>
              <Link
                to="/login"
                className="text-sm text-slate-300 hover:text-white transition-colors pl-4 cursor-pointer"
              >
                Вход
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-sm font-medium px-4 py-2 rounded-full bg-(--accent) text-slate-900 hover:bg-(--accent-hover) transition-colors cursor-pointer"
              >
                Регистрация
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
