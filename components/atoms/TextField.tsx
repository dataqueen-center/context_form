import React from 'react'
import { useText, useDispatchText } from '../InputProvider'
import { useUpdateText } from '../../hooks/useUpdateText';

type TextFieldProps = {
  initial_text: string
  name: string
}

export const TextField: React.FC<TextFieldProps> = ({
  initial_text, name
}: TextFieldProps): JSX.Element => {
  const dispatch = useDispatchText()
  const updateText = useUpdateText(dispatch)
  return (

    <div className="container">
      <textarea onChange={updateText} placeholder={initial_text} name={name}/>
      <style jsx>{``}</style>
    </div>
  )
}
