function SectionHeading({ eyebrow, number, title, id, aside }) {
  return (
    <div className="section-heading">
      <div className="section-heading-main">
        <div className="section-kicker"><span>{number}</span><span className="kicker-line" />{eyebrow}</div>
        <h2 id={id}>{title}</h2>
      </div>
      {aside && <p className="section-aside">{aside}</p>}
    </div>
  )
}

export default SectionHeading
