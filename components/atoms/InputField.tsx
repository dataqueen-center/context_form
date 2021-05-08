import React from 'react'
import { useText, useDispatchText } from '../InputProvider'
import { useUpdateText } from '../../hooks/useUpdateText';

type InputFieldProps = {
  initial_text: string
}

export const InputField: React.FC<InputFieldProps> = ({
  initial_text,
}: InputFieldProps): JSX.Element => {
  const text = useText()
  const dispatch = useDispatchText()
  const updateText = useUpdateText(dispatch)
  return (
    <div className="container">
      <input onChange={updateText}></input>
      {text}

      <style jsx>{``}</style>
    </div>
  )
}
