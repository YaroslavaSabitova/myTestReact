import { forwardRef } from 'react';

type InputProps = {
  label: string;
  placeholder: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function InputComponent(
  { label, placeholder },

  // ref получаем от родителя
  ref
) {
  return (
    <>
      <label className='input-element'>{label}</label>
      <input className='input-element' placeholder={placeholder} ref={ref} />
    </>
  );
});
