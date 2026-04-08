const timeline = [
  { year: '1926', event: 'Founded in Bologna, Italy' },
  { year: '1972', event: 'L-Twin Desmodromic engine born' },
  { year: '1994', event: 'First World Superbike Championship' },
  { year: '2003', event: 'MotoGP World Championship debut' },
  { year: 'Today', event: 'The most desirable motorcycles on earth' },
]

export default function BrandStory() {
  return (
    <section className="story" id="story">
      <div className="story__inner">
        <div className="story__left">
          <p className="section-label">Our Heritage</p>
          <h2 className="story__heading">
            A century of<br />Italian soul.
          </h2>
          <p className="story__body">
            Every Ducati is built around a single conviction — that beauty and performance
            are not opposites, but one and the same. From the workshops of Bologna to
            the podiums of the world, we have never stopped asking more of ourselves.
          </p>
          <p className="story__body">
            The Desmodromic valve system. The L-Twin heartbeat. The trellis frame.
            These are not features. They are beliefs, forged in metal and oil and fire.
          </p>
        </div>
        <div className="story__right">
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline__item" key={i}>
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__dot" />
                <div className="timeline__event">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
