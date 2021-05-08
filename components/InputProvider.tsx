import React, { useReducer, useContext, createContext } from 'react'
//import { theme } from '../../styles/theme'
import { useForm } from '../hooks/useForm'
const INPUT = 'input'
type InputProviderProps = {
  //   element: type
  children: any
}
const InputStateContext = createContext({ text: "" })
const InputDispatchContext = createContext()
const textReducer = (state, action) => {
  switch (action.type) {
    case INPUT:
      return { ...state, text: action.value }
    default:
      return state
  }
}
export const InputProvider: React.FC<InputProviderProps> = ({
  children,
}: InputProviderProps): JSX.Element => {
  console.log("きてる")
  //const [state, dispatch] = useForm('')
  const [state, dispatch] = useReducer(textReducer, {text: ''})
  return (
    <InputDispatchContext.Provider value={dispatch}>
      <InputStateContext.Provider value={state}>
        {children}
      </InputStateContext.Provider>
    </InputDispatchContext.Provider>
  )
}

export const useText = () => useContext(InputStateContext)
export const useDispatchText = () => useContext(InputDispatchContext)
