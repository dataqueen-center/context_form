import React, { useContext, createContext } from 'react'
import { useForm } from '../hooks/useForm'
type InputProviderProps = {
  children: React.ReactNode
}
const InputStateContext = createContext({name: '',email: '',content: ''})
const InputDispatchContext = createContext(null)

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
