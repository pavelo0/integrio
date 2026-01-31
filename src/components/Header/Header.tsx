const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-inner">
          <h1>Intergrio</h1>

          <nav className="header-nav">
            <ul className="nav-menu">
              <li>
                <a href="*">Home</a>
              </li>
              <li>
                <a href="*">Demo</a>
              </li>
              <li>
                <a href="*">Pricing</a>
              </li>
              <li>
                <a href="*">Contacts</a>
              </li>

              <div className="login-nav">
                <li>
                  <a href="*">Login</a>
                </li>
                <li>
                  <a href="*">Registration</a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
