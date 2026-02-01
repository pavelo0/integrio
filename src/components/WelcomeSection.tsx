const WelcomeSection = () => {
  return (
    <section className="min-h-screen flex flex-col bg-amber-100" aria-labelledby="welcome-heading">
      <div className="container flex-1 flex flex-col justify-center">
        <h1 id="welcome-heading">Заголовок приветствия</h1>
        <p>Краткое описание продукта или сервиса — что мы делаем и чем полезны.</p>
        <a href="#about">Discover</a>
        <a href="#demo">View demo</a>
        <figure className="hero-visual" aria-hidden="true">
          <div role="img" aria-label="Hero illustration or animation placeholder" />
        </figure>
      </div>
    </section>
  );
};

export default WelcomeSection;
