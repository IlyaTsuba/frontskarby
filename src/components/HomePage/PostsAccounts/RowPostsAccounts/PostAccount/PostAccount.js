import { useState } from "react"
import { ButtonMore } from "../../../../Buttons/ButtonMore"
import { Widget } from "../../../../Widget"
import { useDispatch } from "react-redux"
import { loadSelectedPostAccountWidget } from "../../../../../store/action_creators"

const PostAccount = ({account}) => {
  const {avatar, slug, name} = account
  // const [showWidget, setShowWidget] = useState(false)
  // const dispatch = useDispatch()
  // const handler = () => {
  //   setShowWidget(true)
  //   dispatch(loadSelectedPostAccountWidget(slug))
  // }
  return (
    <div className='block-account'>
      <img 
        className='block-account__image'
        src={'http://127.0.0.1:8000/'+ avatar}
        alt='image1'
        // onMouseOver={handler}
      />
      <h4 className='block-account__title'>{name}</h4>
      <ButtonMore link={`/accounts/${slug}`} />
      {/* {showWidget && <Widget id={slug}/>} */}
    </div>
  )
}

export { PostAccount }