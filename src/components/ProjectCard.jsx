function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div
        aria-label={project.visualLabel}
        className={`project-visual ${project.visual}`}
        role="img"
      >
        <span className="visual-orbit visual-orbit-one" />
        <span className="visual-orbit visual-orbit-two" />
        <div className="visual-flow">
          {project.visualWords.map((word, index) => (
            <div className="visual-flow-step" key={word}>
              <span className="visual-flow-index">0{index + 1}</span>
              <span className="visual-flow-label">{word}</span>
              {index < project.visualWords.length - 1 && <span className="visual-flow-connector" />}
            </div>
          ))}
        </div>
        <span className="visual-decoration" aria-hidden="true">{project.number}</span>
      </div>
      <div className="project-content">
        <div className="project-meta"><span>{project.category}</span><span>{project.number} / 02</span></div>
        <h3>{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-outcome"><span>THE APPROACH</span><p>{project.outcome}</p></div>
        <div aria-label="Technologies used" className="tag-list project-tags">
          {project.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
