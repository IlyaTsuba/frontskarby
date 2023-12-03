

const Error = (error) => {
  const obj = error
  return (
    <div className='error'>
      {obj.error}
    </div>
  )
}

export { Error }