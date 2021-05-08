import React, { useReducer, useContext, createContext } from 'react'
//import { theme } from '../../styles/theme'
import { useForm } from '../hooks/useForm'
const INPUT = 'input'
type InputProviderProps = {
  children: any
}
const InputStateContext = createContext('')
const InputDispatchContext = createContext()

export const InputProvider: React.FC<InputProviderProps> = ({
  children,
}: InputProviderProps): JSX.Element => {
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
