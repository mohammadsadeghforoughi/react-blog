import { BoxActionTypes } from '../actions'

const initialState = {
  breadCrumbLocation: []
}

interface IArgs {
  type: string
  payload?: any
}

const reducer = (state = initialState, { type, payload }: IArgs) => {
  switch (type) {
    case BoxActionTypes.ADD_AUTO_BOX_WITHDRAW: {
      return {
        ...state,
        ...payload
      }
    }
    default: {
      return state
    }
  }
}

export { reducer as generalsReducer }
