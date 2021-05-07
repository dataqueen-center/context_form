import React, { useReducer, useContext, createContext } from 'react'
//import { theme } from '../../styles/theme'

type InputFieldProps = {
  initial_text: string
}

const InputStateContext = createContext(null);
const InputDispatchContext = createContext(null);

export const InputField: React.FC<InputFieldProps> = ({
  initial_text,
}: InputFieldProps): JSX.Element => {
  return (
    <div className="container">
      <input></input>
      <style jsx>{``}</style>
    </div>
  )
}
