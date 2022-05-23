import React from 'react';

type Props = {
  onSelect: (option?: string, index?: number) => void;
  options: string[];
  placeholder: string;
  selectedOption?: string;
};

function Select(props: Props) {
  return props.selectedOption ? (
    <div className="py-1.5 px-5 mr-2 mb-2 w-fit bg-gradient-to-r from-indigo-700 to-red-500 rounded-full text-white flex justify-between">
      {props.selectedOption}
      <button
        className="ml-2 hover:text-black"
        onClick={() => props.onSelect(undefined)}
      >
        &#10006;
      </button>
    </div>
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
    >
      <option selected disabled>
        {props.placeholder}
      </option>
      {props.options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export default Select;
