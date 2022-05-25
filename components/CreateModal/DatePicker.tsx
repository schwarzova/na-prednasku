import React, { useState } from 'react';
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
};

function DatePicker(props: Props) {
  const today = new Date();
  const formattedToday = today.toISOString().substr(0, 10);
  const [value, setValue] = useState(formattedToday);
  const year = today.getFullYear();

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
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="date"
        min={`${year}-01-01`}
        max={`${year + 1}-12-31`}
      />
      {props.error && props.error === 'required' && (
        <p className="ml-3 text-red-600 mb-2">⚠ Povinné pole</p>
      )}
    </>
  );
}

export default DatePicker;
