const AdvantageSection = () => {
  const advantages = [
    {
      title: "Speed",
      description: "Blazing-fast inference for both language and multimodal models.",
    },
    {
      title: "Flexibility",
      description: "Serverless, dedicated, or custom—run models your way.",
    },
    {
      title: "Efficiency",
      description: "Higher throughput, lower latency, and better price.",
    },
    {
      title: "Privacy",
      description: "No data stored, ever. Your models stay yours.",
    },
    {
      title: "Control",
      description: "Fine-tune, deploy, and scale your models your way—no infrastructure headaches, no lock-in.",
    },
    {
      title: "Simplicity",
      description: "One API for all models, fully OpenAI-compatible.",
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop"
          alt="Tech background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-badge mb-6 inline-block">
            ADVANTAGE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-silicon-text-dark">Built for What Developers</span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="section-gradient">Really Care About</span>
          </h2>
          <p className="text-lg text-silicon-text-muted max-w-2xl mx-auto leading-relaxed">
            Speed, accuracy, reliability, and fair pricing—no trade-offs.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-base text-silicon-text-muted leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;