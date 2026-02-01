const DemoSection = () => {
  return (
    <section id="demo" aria-labelledby="demo-heading" className="bg-green-400 min-h-screen">
      <div className="container">
        <h2 id="demo-heading">Как это работает</h2>
        <p>Демо-окно модуля — как мы работаем.</p>
        <figure>
          <div role="img" aria-label="Окно демо-модуля" />
        </figure>
      </div>
    </section>
  );
};

export default DemoSection;
