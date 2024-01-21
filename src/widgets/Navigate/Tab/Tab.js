

const Tab = (props) => {
  const {callback, text, id, isActive} = props;
  return (
    <div
      id={id}
      className={`nav ${isActive ? 'active' : ''}`}
      onClick={() => callback(id)}
    >
      <span>
        {text}
      </span>
    </div>
  )
}

export { Tab }