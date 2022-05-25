import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  id: string;
  inputProps?: UseFormRegisterReturn;
  isError?: boolean;
  label: React.ReactNode;
  onChange?: () => void;
  options: string[];
};

function Select(props: Props) {
  return (
    <>
      <label htmlFor={props.id} className="text-white text-sm ml-3 mr-2">
        {props.label}
      </label>
      <select
        {...props.inputProps}
        className={`form-select appearance-none block w-30 px-5 py-1.5 text-base font-normal text-white
                  bg-nabifli-black-card bg-clip-padding bg-no-repeat
                  rounded-full
                  transition
                  ease-in-out
                  mr-2 ${props.isError ? '' : 'mb-2'}
                  focus:text-white focus:bg-nabifli-black-card focus:border-blue-600 focus:outline outline-offset-2 outline-1 outline-purple-600`}
        aria-label="Default select example"
        onChange={props.onChange}
      >
        {props.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
