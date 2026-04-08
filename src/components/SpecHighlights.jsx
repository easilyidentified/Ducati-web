const specs = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" />
        <path d="M24 6v6M24 36v6M6 24h6M36 24h6" />
        <circle cx="24" cy="24" r="6" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
    label: 'Engine',
    value: '937cc',
    detail: 'Testastretta 11° · L-Twin · Euro 5',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 40L24 8l16 32" />
        <path d="M14 28h20" />
        <path d="M24 8v8" strokeWidth="2.5" />
      </svg>
    ),
    label: 'Peak Power',
    value: '111 HP',
    detail: '82kW @ 9,250rpm · Torque 93Nm @ 6,500rpm',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 32 Q24 12 40 32" />
        <circle cx="24" cy="32" r="4" fill="currentColor" strokeWidth="0" />
        <path d="M16 38h16" />
      </svg>
    ),
    label: 'Design',
    value: 'Full LED',
    detail: 'Aggressive modern lines · Full LED lighting system',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="10" y="14" width="28" height="20" rx="3" />
        <path d="M18 14v-4M30 14v-4" />
        <path d="M16 24h4M28 24h4" />
        <circle cx="24" cy="24" r="3" fill="currentColor" strokeWidth="0" />
      </svg>
    ),
    label: 'Electronics',
    value: '5 Systems',
    detail: 'Cornering ABS · Traction Control · Wheelie Control · Launch Control · Quickshift Up/Down',
  },
]

export default function SpecHighlights() {
  return (
    <section className="specs" id="specs">
      <div className="specs__inner">

        <div className="specs__header">
          <p className="section-label">Model Spotlight</p>
          <h2 className="specs__heading">Ducati Monster 937.</h2>
          <p className="specs__subheading">
            The icon, reimagined. Lighter, sharper, and more connected than ever before.
          </p>
        </div>

        <div className="specs__video-wrap">
          <iframe
            src="https://www.youtube.com/embed/lsTo7lyPzRo"
            title="Ducati Monster 937"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="specs__grid">
          {specs.map((s, i) => (
            <div className="spec-card" key={i}>
              <div className="spec-card__icon">{s.icon}</div>
              <p className="spec-card__label">{s.label}</p>
              <p className="spec-card__value">{s.value}</p>
              <p className="spec-card__detail">{s.detail}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
