

const SelectedPostAccountImage = ({photo, cls}) => {

  return (
    <div className={cls.box_photo}>
      <img src={photo.photo} alt='photo'/>
    </div>
  )
}

export { SelectedPostAccountImage };