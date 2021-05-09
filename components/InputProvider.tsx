import React, { useContext, createContext } from 'react'
import { useForm } from '../hooks/useForm'
const INPUT = 'input'
type InputProviderProps = {
  children: React.ReactNode
}
//const InputStateContext = createContext({name: '', email: '', content: ''})
const InputStateContext = createContext()
const InputDispatchContext = createContext()

export const InputProvider: React.FC<InputProviderProps> = ({
  children,
}: InputProviderProps): JSX.Element => {
  const [state, dispatch] = useForm('')
  return (
    <div>
    <InputDispatchContext.Provider value={dispatch}>
      <InputStateContext.Provider value={[state]}>
        {[children]}
      </InputStateContext.Provider>
    </InputDispatchContext.Provider>
    </div>
  )
}

export const useText = () => useContext(InputStateContext)
export const useDispatchText = () => useContext(InputDispatchContext)
