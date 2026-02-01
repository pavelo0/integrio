import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="h-[80px] w-full bg-blue-500">
      <div className="container h-full">
        <div className="h-full flex justify-between items-center">
          <h1 className="">Intergrio</h1>

          <nav aria-label="Основная навигация">
            <ul className="flex items-center gap-6">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#demo">Demo</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#about">About</a>
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
