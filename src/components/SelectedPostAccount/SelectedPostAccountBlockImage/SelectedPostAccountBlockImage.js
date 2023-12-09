

const SelectedPostAccountImage = ({photo}) => {

  return (
    <div className='box-w-photo'>
      <img src={`http://127.0.0.1:8000/`+ photo.photo} alt='photo'/>
    </div>
  )
}

export { SelectedPostAccountImage }