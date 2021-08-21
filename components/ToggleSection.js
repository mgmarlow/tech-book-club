export default function ToggleSection({ className, header, children }) {
  return (
    <details className={className}>
      <summary className="is-clickable">
        <span className="has-text-weight-bold">{header}</span>
      </summary>

      <div className="content is-medium ml-4 py-2">{children}</div>
    </details>
  )
}
