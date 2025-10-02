const Object = ({ object, description, comma = false, className = '' }) => {
  return (
    <div className={className}>
      {Array.isArray(description) ? (
        <>
          <span className="property">{object}</span>
          <span className="operator">: </span>
          <span className="brace">[</span>
          {description.map((i, idx) => (
            <span className="string" key={idx}>
              '{i}'{idx < description.length - 1 ? ', ' : ''}
            </span>
          ))}
          <span className="brace">]</span>
          {comma && <span className="operator">,</span>}
          <br />
        </>
      ) : (
        <>
          <span className="property">{object}</span>
          <span className="operator">: </span>
          <span className="string">'{description}'</span>
          {comma && <span className="operator">,</span>}
          <br />
        </>
      )}
    </div>
  )
}

export default Object
