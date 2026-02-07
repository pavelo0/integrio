import { Home, LayoutDashboard, LogOut, User, Wrench } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { logout } from '../store/authSlice';

const ServiceHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const linkClass = (path: string) =>
    `flex items-center justify-center w-full py-3 transition-colors ${
      location.pathname === path ? 'text-(--accent)' : 'text-slate-300 hover:text-white'
    }`;
  const iconSize = 'w-6 h-6';
  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/');
  };

  return (
    <header
      role="navigation"
      aria-label="Service navigation"
      className="service-sidebar flex flex-col"
    >
      <Link
        to={ROUTES.SERVICE_HOME}
        className={`${linkClass(ROUTES.SERVICE_HOME)} mt-4 text-center`}
        title="Home"
        aria-label="На главную"
      >
        I
      </Link>
      <nav className="flex flex-col gap-1 mt-6" aria-label="Service menu">
        <Link
          to={ROUTES.SERVICE_HOME}
          className={linkClass(ROUTES.SERVICE_HOME)}
          title="Home"
          aria-label="Библиотека чатов"
        >
          <Home className={iconSize} strokeWidth={2} aria-hidden />
        </Link>
        <Link
          to={ROUTES.DASHBOARD}
          className={linkClass(ROUTES.DASHBOARD)}
          title="Dashboard"
          aria-label="Дашборд"
        >
          <LayoutDashboard className={iconSize} strokeWidth={2} aria-hidden />
        </Link>
        <Link
          to={ROUTES.WORKSHOP}
          className={linkClass(ROUTES.WORKSHOP)}
          title="Workshop"
          aria-label="Мастерская"
        >
          <Wrench className={iconSize} strokeWidth={2} aria-hidden />
        </Link>
      </nav>
      <div className="flex-1" aria-hidden="true" />
      <Link
        to={ROUTES.PROFILE}
        className={linkClass(ROUTES.PROFILE)}
        title="Profile"
        aria-label="Профиль"
      >
        <User className={iconSize} strokeWidth={2} aria-hidden />
      </Link>
      <Link
        to={ROUTES.HOME}
        onClick={handleLogout}
        className="flex items-center justify-center w-full py-3 transition-colors text-slate-300 hover:text-white pb-5"
        title="Выйти"
        aria-label="Выйти"
      >
        <LogOut className={iconSize} strokeWidth={2} aria-hidden />
      </Link>
    </header>
  );
};

export default ServiceHeader;
