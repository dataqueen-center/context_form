import * as React from 'react'
import { InputField } from '../atoms/InputField';
import { TextField } from '../atoms/TextField';

type ContactFormProps = {
  //element: type
}

export const ContactForm: React.FC<ContactFormProps> = ({  }: ContactFormProps): JSX.Element => {
  return (
    <div className="container">
      <InputField initial_text="山田太郎"/>
      <InputField initial_text="山田太郎"/>
      <TextField initial_text="この前購入した製品が動かない"/>
      <button>send!!</button>
      <style jsx>{`
      `}</style>
    </div>
  );
}
