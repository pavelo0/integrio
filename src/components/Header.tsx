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
    <header className="h-[80px] w-full bg-blue-500">
      <div className="container h-full">
        <div className="h-full flex justify-between items-center">
          <h1 className="inter text-2xl font-bold">Intergrio</h1>

          <nav aria-label="Основная навигация">
            <ul className="flex items-center gap-6">
              <li>
                <a onClick={handleNavigation('hero')} href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a onClick={handleNavigation('demo')} href="#demo">
                  Demo
                </a>
              </li>
              <li>
                <a onClick={handleNavigation('pricing')} href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a onClick={handleNavigation('about')} href="#about">
                  About
                </a>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Registration</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
