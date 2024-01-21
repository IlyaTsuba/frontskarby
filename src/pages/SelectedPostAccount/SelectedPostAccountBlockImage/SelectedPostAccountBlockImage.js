

const SelectedPostAccountImage = ({photo}) => {

  return (
    <div className='box-w-photo'>
      <img src={photo.photo} alt='photo'/>
    </div>
  )
}

export { SelectedPostAccountImage }