const EpisodePreview = ({ title, description, link }) => {
  return (
    <div className="content">
      <h3>
        <a className="has-text-black" href={link}>
          {title}
        </a>
      </h3>

      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}

export default EpisodePreview
