import * as React from 'react'
import { InputField } from '../atoms/InputField';
import { TextField } from '../atoms/TextField';
import {useText} from '../InputProvider'

type ContactFormProps = {
  //element: type
}

export const ContactForm: React.FC<ContactFormProps> = ({  }: ContactFormProps): JSX.Element => {
  const textState = useText()
  //const [name, email, content] = useText()
  return (
    <div className="container">
      <InputField initial_text="山田太郎" name="name_holder"/>
      {textState.name}
      <InputField initial_text="山田太郎" name="email_holder"/>
      {textState.email}
      <TextField initial_text="この前購入した製品が動かない" name="content_holder"/>
      {textState.content}
      <button>send!!</button>
      <style jsx>{`
      `}</style>
    </div>
  );
}
