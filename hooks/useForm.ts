import { useReducer } from 'react'

const NAMEINPUT = 'nameInput'
const EMAILINPUT = 'emaikInput'
const CONTENTINPUT = 'contentInput'

export const useForm = (initialState: string) => {
  const textReducer = (state, action) => {
    switch (action.type) {
      case NAMEINPUT:
        return {...state, name: action.value}
      case EMAILINPUT:
        return {...state, email: action.value}
      case CONTENTINPUT:
        return {...state, content: action.value}
      default:
        return state
    }
  }
  const initTextState = (initialText: string) => {
    //return initialText
    return {name: initialText, email: initialText, content: initialState}
  }
  //const [state, dispatch] = useReducer(textReducer, initialState, initTextState)
  const [state, dispatch] = useReducer(textReducer,{name: '',email: '',content: ''})
  return [state, dispatch]
}
