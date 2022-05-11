import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'

import { generalsReducer } from './generals'

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    generals: generalsReducer

  })
