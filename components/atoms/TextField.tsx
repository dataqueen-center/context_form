import React, { useReducer, useContext, createContext } from 'react'
//import { theme } from '../../styles/theme'

type TextFieldProps = {
  initial_text: string
}

// const InputStateContext = createContext(null);
// const InputDispatchContext = createContext(null);

export const TextField: React.FC<TextFieldProps> = ({
  initial_text,
}: TextFieldProps): JSX.Element => {
  return (

    <div className="container">
      <textarea/>
      <style jsx>{``}</style>
    </div>
  )
}
