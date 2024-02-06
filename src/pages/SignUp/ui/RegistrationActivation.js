import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { activateRegistration } from "../../../store/action_creators";

const RegistrationActivation = () => {
  const {uid = '', token = ''} = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(activateRegistration({uid, token}))
  }, [dispatch, uid, token])
  return (
    <div>
      ...loading
    </div>
  )
}

export { RegistrationActivation }