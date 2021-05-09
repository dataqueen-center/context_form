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
  //const [name_state, email_state, content_state] = useText()
  //const {state, dispatch} = useText()
  const dispatch = useDispatchText()
  const updateText = useUpdateText(dispatch)
  return (
    <div className="container">
      <input onChange={updateText} placeholder={initial_text} name={name}></input>
      {/* {text} */}

      <style jsx>{``}</style>
    </div>
  )
}
