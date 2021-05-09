import { useReducer } from 'react'

const NAMEINPUT = 'nameInput'
const EMAILINPUT = 'emaikInput'
const CONTENTINPUT = 'contentInput'

export const useForm = (initialState: string) => {
  const textReducer = (state, action) => {
    switch (action.type) {
      case NAMEINPUT:
        return {...state, name: action.value}
        //return [action.value, ...state]
      case EMAILINPUT:
        return {...state, email: action.value}
        //return [state[0], action.value, state[2]]
      case CONTENTINPUT:
        return {...state, content: action.value}
        //return [...state, action.value]
      default:
        return state
    }
  }
  const initTextState = (initialText: string) => {
    //return initialText
    return {name: initialText, email: initialText, content: initialState}
    //return [initTextState,initTextState,initTextState]
  }
  const [state, dispatch] = useReducer(textReducer, initialState, initTextState)
  return [state, dispatch]
}
