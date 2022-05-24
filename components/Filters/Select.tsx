import React from 'react';
import BoolButton from './BoolButton';

type Props = {
  icon: string;
  onSelect: (option?: string, index?: number) => void;
  options: string[];
  placeholder: string;
  selectedOption?: string;
  minWidth: string;
};

function Select(props: Props) {
  return props.selectedOption ? (
    <BoolButton
      isSelected
      onClick={() => props.onSelect(undefined)}
      title={`${props.icon} ${props.selectedOption}`}
      minWidth={props.minWidth}
    />
  ) : (
    <select
      onChange={(e) => props.onSelect(e.target.value, e.target.selectedIndex)}
      className="form-select appearance-none block w-30 px-3 py-1.5 text-base font-normal text-white
                  bg-nabifli-black-card bg-clip-padding bg-no-repeat
                  rounded-full
                  transition
                  ease-in-out
                  mr-2 mb-2
                  focus:text-white focus:bg-nabifli-black-card focus:border-blue-600 focus:outline-none"
      aria-label="Default select example"
      defaultValue={props.placeholder}
    >
      <option disabled>{props.placeholder}</option>
      {props.options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export default Select;
