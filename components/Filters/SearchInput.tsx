import React from 'react';

type Props = {
  searchText: string;
  onChange: (text: string) => void;
};

function SearchInput(props: Props) {
  const notSelectedClasses = 'from-nabifli-black-card to-nabifli-black-card';
  const selectedClasses = 'from-indigo-700 to-red-500';
  const selectedClass = props.searchText ? selectedClasses : notSelectedClasses;

  return (
    <input
      type="text"
      placeholder="🔎 Hledat..."
      className={`py-1.5 px-5 mr-2 bg-gradient-to-r ${selectedClass} rounded-full text-white flex justify-between h-[36px]`}
      value={props.searchText}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}

export default SearchInput;
