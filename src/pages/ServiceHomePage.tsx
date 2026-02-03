const ServiceHomePage = () => {
  return (
    <div className="relative min-h-full py-8" style={{ backgroundColor: 'var(--hero-bg)' }}>
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="container relative z-10">
        <h1 className="text-4xl font-bold text-white tracking-tight">Chat library</h1>
        <p className="mt-3 text-slate-400">Your chat widgets will appear here.</p>
      </div>
    </div>
  );
};

export default ServiceHomePage;
