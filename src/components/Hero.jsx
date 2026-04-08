export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" style={{ backgroundImage: 'url(./ducati-homepage-photo.jpg)' }} />
      <div className="hero__glow" />
      <div className="hero__content">
        <p className="hero__eyebrow">Panigale V4 S · 2024</p>
        <h1 className="hero__heading">
          Born to Be<br />Different
        </h1>
        <p className="hero__sub">
          Italian engineering. Obsessive passion. Zero compromise.
        </p>
        <div className="hero__actions">
          <a href="#specs" className="btn btn--red">Explore Moster 937</a>
          <a href="#story" className="btn btn--outline">Our Story</a>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
