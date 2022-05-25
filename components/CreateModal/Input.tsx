import React from 'react';
import {
  LiteralUnion,
  RegisterOptions,
  UseFormRegisterReturn,
} from 'react-hook-form';

type Props = {
  error?: LiteralUnion<keyof RegisterOptions, string>;
  id: string;
  inputProps: UseFormRegisterReturn;
  label: string;
  maxLength?: number;
  placeholder?: string;
};

function Input(props: Props) {
  return (
    <>
      <label htmlFor={props.id} className="text-white text-sm ml-3">
        {props.label}
      </label>
      <input
        id={props.id}
        {...props.inputProps}
        className={`py-1.5 px-5 bg-nabifli-black-card rounded-full text-white flex w-full ${
          props.error ? '' : 'mb-2'
        } focus:outline outline-offset-2 outline-1 outline-purple-600`}
        placeholder={props.placeholder}
        type="text"
      />
      {props.error && props.error === 'required' && (
        <p className="ml-3 text-red-600 mb-2">⚠ Povinné pole</p>
      )}
      {props.error && props.maxLength && props.error === 'maxLength' && (
        <p className="ml-3 text-red-600 mb-2">{`⚠ Maximální délka je ${props.maxLength} znaků`}</p>
      )}
    </>
  );
}

export default Input;
