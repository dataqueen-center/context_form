import * as React from 'react'
//import { theme } from '../../styles/theme'

type InputFieldProps = {
  initial_text: string
}

export const InputField: React.FC<InputFieldProps> = ({ initial_text }: InputFieldProps): JSX.Element => {
  return (
    <div className="container">
      <input>
      </input>
      <style jsx>{`
      `}</style>
    </div>
  );
}
