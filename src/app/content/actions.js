
export const RECEIVE_CONTENTS = 'RECEIVE_CONTENTS'

export const getContents = () => async (dispatch) => {
  const response = await fetch('http://tm-kitchen-api-alpha.herokuapp.com/videos?api_key=homework&auth_token=1&limit=10&workflow_status=ready')
  const data = await response.json()

  dispatch({
   type: RECEIVE_CONTENTS,
   payload: data
  })
 }
