import { ChangeEvent, useReducer } from 'react'

const INPUT = 'input'

export const useForm = (initialState: string) => {
  const textReducer = (state, action) => {
    switch (action.type) {
      case INPUT:
        //return { ...state, text: action.value }
        return action.value
      default:
        return state
    }
  }
  const initTextState = (initialText: string) => {
    console.log("きてる")
    //return { text: initialText }
    return initialText
  }
  const [state, dispatch] = useReducer(textReducer, initialState, initTextState)
  //const [state, dispatch] = useReducer(textReducer, {text: ""})
  return [state, dispatch]
}
