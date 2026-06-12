export default function HeroShowcase({ items }) {
  return (
    <div className="hero-showcase" aria-label="Heights Communications service showcase">
      <div className="hero-showcase-ring" aria-hidden="true" />
      <div className="hero-showcase-spoke hero-showcase-spoke-1" aria-hidden="true" />
      <div className="hero-showcase-spoke hero-showcase-spoke-2" aria-hidden="true" />
      <div className="hero-showcase-spoke hero-showcase-spoke-3" aria-hidden="true" />
      <div className="hero-showcase-spoke hero-showcase-spoke-4" aria-hidden="true" />
      <div className="hero-showcase-spoke hero-showcase-spoke-5" aria-hidden="true" />
      <div className="hero-showcase-center" aria-hidden="true">
        <img src="/logo.svg" alt="" />
      </div>

      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className={`hero-showcase-item hero-showcase-item-${index + 1}`}>
            <div className="hero-showcase-panel">
              <img src={item.image} alt="" />
            </div>
            <div className="hero-showcase-callout">
              <span className="hero-showcase-icon">
                <Icon aria-hidden="true" />
              </span>
              <span>
                <span className="font-bold uppercase">{item.title}</span>
                <small>{item.text}</small>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
