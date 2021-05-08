const INPUT = 'input'

export const useUpdateText = (dispatch) => {
  const updateText = (event) => {
    if (dispatch) {
      console.log(event.target.value)
      dispatch({ type: INPUT, value: event.target.value })
    }
    console.log(event.target.value)
  }

  return updateText
}
