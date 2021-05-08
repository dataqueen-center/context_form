import React, { useReducer, useContext, createContext } from 'react'
import { useText, useDispatchText } from '../InputProvider'
//import { theme } from '../../styles/theme'

const INPUT = 'input'

type InputFieldProps = {
  initial_text: string
}

export const InputField: React.FC<InputFieldProps> = ({
  initial_text,
}: InputFieldProps): JSX.Element => {
  const text = useText().text
  const dispatch = useDispatchText()
  const updateText = (e) => {
    dispatch({ type: INPUT, value: e.target.value })
  }
  return (
    <div className="container">
      <input onClick={updateText}></input>
      {text}
      <style jsx>{``}</style>
    </div>
  )
}
