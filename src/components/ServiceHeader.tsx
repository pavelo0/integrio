import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { logout } from '../store/authSlice';

const ServiceHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const linkClass = (path: string) =>
    `flex items-center justify-center w-full py-3 text-lg font-medium transition-colors ${
      location.pathname === path ? 'text-(--accent)' : 'text-slate-300 hover:text-white'
    }`;
  const handleLogout = () => {
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
        className={`${linkClass(ROUTES.SERVICE_HOME)} text-2xl mt-4`}
        title="Home"
      >
        I
      </Link>
      <nav className="flex flex-col gap-1 mt-6" aria-label="Service menu">
        <Link to={ROUTES.SERVICE_HOME} className={linkClass(ROUTES.SERVICE_HOME)} title="Home">
          H
        </Link>
        <Link to={ROUTES.DASHBOARD} className={linkClass(ROUTES.DASHBOARD)} title="Dashboard">
          D
        </Link>
        <Link to={ROUTES.WORKSHOP} className={linkClass(ROUTES.WORKSHOP)} title="Workshop">
          W
        </Link>
      </nav>
      <div className="flex-1" aria-hidden="true" />
      <Link to={ROUTES.PROFILE} className={linkClass(ROUTES.PROFILE)} title="Profile">
        P
      </Link>
      <Link
        onClick={handleLogout}
        to={ROUTES.HOME}
        className={linkClass(ROUTES.PROFILE)}
        title="Profile"
      >
        L
      </Link>
    </header>
  );
};

export default ServiceHeader;
