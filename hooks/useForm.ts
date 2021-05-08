import { ChangeEvent, useReducer } from 'react'

const INPUT = 'input'

export const useForm = (initialState: string) => {
  const textReducer = (state, action) => {
    switch (action.type) {
      case INPUT:
        return { ...state, text: action.value }
      default:
        return state
    }
  }
  const initTextState = (initialText: string) => {
    return { text: initialText }
  }
  const [state, dispatch] = useReducer(textReducer, initialState, initTextState)
  // const updateText = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   dispatch({ type: INPUT, value: e.target.value })
  // }

  return [state, dispatch]

  // return {
  //   state,
  //   dispatch
  //   // bind: {
  //   //   onChange: updateText,
  //   // },
  // }
}
