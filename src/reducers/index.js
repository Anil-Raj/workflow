import { combineReducers } from 'redux'
import workflows from './workflows'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  workflows,
  visibilityFilter
})