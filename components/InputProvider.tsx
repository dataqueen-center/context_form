import React, { useReducer, useContext, createContext } from 'react'
//import { theme } from '../../styles/theme'
import { useForm } from '../hooks/useForm'

type InputProviderProps = {
  //   element: type
  children: any
}
const InputStateContext = createContext({ text: "" })
const InputDispatchContext = createContext(null)

export const InputProvider: React.FC<InputProviderProps> = ({
  children,
}: InputProviderProps): JSX.Element => {
  console.log("きてる")
  const [state, dispatch] = useForm('')
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
