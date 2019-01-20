import { RECEIVE_CONTENTS } from './actions'
import { Content } from './model'

const INITIAL_STATE = {
  list: []
}

function receiveContents(state, payload) {
  const contents = payload.map((item) => new Content(item))
  return {
    ...state,
    list: contents
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
   case RECEIVE_CONTENTS:
    return receiveContents(state, action.payload)
   default:
    return state
  }
 }
