import config from '../config'

export const RECEIVE_CONTENTS = 'RECEIVE_CONTENTS'

export const getContents = () => async (dispatch) => {
  const url = config.backendHost + config.backendEndpoint
  const response = await fetch(url)
  const data = await response.json()

  dispatch({
   type: RECEIVE_CONTENTS,
   payload: data
  })
 }
