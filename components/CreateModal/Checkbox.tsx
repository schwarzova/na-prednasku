import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  id: string;
  inputProps: UseFormRegisterReturn;
  label: string;
};

function Checkbox(props: Props) {
  return (
    <>
      <label htmlFor={props.id} className="text-white text-sm ml-3">
        {props.label}
      </label>
      <input
        id={props.id}
        {...props.inputProps}
        className="flex ml-3 mt-1 focus:outline outline-offset-2 outline-1 outline-purple-600"
        type="checkbox"
      />
    </>
  );
}

export default Checkbox;
