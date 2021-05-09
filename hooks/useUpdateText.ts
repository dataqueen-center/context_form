const NAMEINPUT = 'nameInput'
const EMAILINPUT = 'emaikInput'
const CONTENTINPUT = 'contentInput'

export const useUpdateText = (dispatch) => {
  const updateText = (event) => {
    if (dispatch) {
      console.log(event.target.value)
      switch (event.target.name) {
        case 'name_holder':
          dispatch({ type: NAMEINPUT, value: event.target.value })
          break;
        case 'email_holder':
          dispatch({ type: EMAILINPUT, value: event.target.value })
          break;
        case 'content_holder':
          dispatch({ type: CONTENTINPUT, value: event.target.value })
          break;
        default:
          break;
      }
    }
    console.log(event.target.value)
    console.log(event.target.key)
  }

  return updateText
}
