

const Tab = (
  {
    callback, 
    text, 
    id, 
    isActive, 
    cls
  }
) => {
  console.log(cls)
  return (
    <div
      id={id}
      className={`${cls.nav} ${isActive ? cls.active : ''}`}
      onClick={() => callback(id)}
    >
      <span>
        {text}
      </span>
    </div>
  )
}

export { Tab }