const PricingSection = () => {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="min-h-screen bg-violet-400">
      <div className="container">
        <h2 id="pricing-heading">Pricing</h2>
        <div>
          <article aria-labelledby="plan-basic">
            <h3 id="plan-basic">Basic</h3>
            <p>Описание тарифа Basic.</p>
          </article>
          <article aria-labelledby="plan-pro">
            <h3 id="plan-pro">Pro</h3>
            <p>Описание тарифа Pro.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
