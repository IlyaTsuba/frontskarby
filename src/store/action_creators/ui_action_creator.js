import { ACTIVE_TAB } from '../action_types'

const activeTab = ( tabs ) => ({
  type: ACTIVE_TAB,
  tabs,
})

export { activeTab }