import React from 'react'
import { useText, useDispatchText } from '../InputProvider'
import { useUpdateText } from '../../hooks/useUpdateText';

type TextFieldProps = {
  initial_text: string
}



export const TextField: React.FC<TextFieldProps> = ({
  initial_text,
}: TextFieldProps): JSX.Element => {
  const text = useText()
  const dispatch = useDispatchText()
  const updateText = useUpdateText(dispatch)
  return (

    <div className="container">
      <textarea onChange={updateText} placeholder={initial_text}/>
      {text}
      <style jsx>{``}</style>
    </div>
  )
}
