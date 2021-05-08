import { useReducer } from 'react'

const INPUT = 'input'

export const useForm = (initialState: string) => {
  const textReducer = (state, action) => {
    switch (action.type) {
      case INPUT:
        return action.value
      default:
        return state
    }
  }
  const initTextState = (initialText: string) => {
    return initialText
  }
  const [state, dispatch] = useReducer(textReducer, initialState, initTextState)
  return [state, dispatch]
}
