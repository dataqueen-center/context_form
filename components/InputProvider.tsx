import React, { useReducer, useContext, createContext } from 'react'
//import { theme } from '../../styles/theme'

 type InputProviderProps = {
//   element: type
    children: any
}
const InputStateContext = createContext(null);
const InputDispatchContext = createContext(null);



export const InputProvider: React.FC<InputProviderProps> = ({ children }: InputProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(textReducer, "")
  return (
    <InputDispatchContext.Provider value={dispatch}>
      <InputStateContext.Provider value={state}>
        {children}
        {console.log(typeof(children))}
      </InputStateContext.Provider>
    </InputDispatchContext.Provider>
  );
}

export const useText = () => useContext(InputStateContext);
export const useDispatchText = () => useContext(InputDispatchContext);
