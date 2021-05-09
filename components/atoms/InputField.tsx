import React from 'react'
import { useText, useDispatchText } from '../InputProvider'
import { useUpdateText } from '../../hooks/useUpdateText';

type InputFieldProps = {
  initial_text: string
  name: string
}

export const InputField: React.FC<InputFieldProps> = ({
  initial_text, name
}: InputFieldProps): JSX.Element => {
  const dispatch = useDispatchText()
  const updateText = useUpdateText(dispatch)
  return (
    <div className="container">
      <input onChange={updateText} placeholder={initial_text} name={name}></input>
      <style jsx>{``}</style>
    </div>
  )
}
