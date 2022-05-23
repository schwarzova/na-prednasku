import React from 'react';

type Props = {
  isSelected: boolean;
  onClick: () => void;
  title: string;
};

function BoolButton(props: Props) {
  const notSelectedClasses = 'from-nabifli-black-card to-nabifli-black-card';
  const selectedClasses = 'from-indigo-700 to-red-500';
  const selectedClass = props.isSelected ? selectedClasses : notSelectedClasses;

  return (
    <button
      className={`py-1.5 px-3 mr-2 mb-2 bg-gradient-to-r ${selectedClass} rounded-full text-white flex justify-between`}
      onClick={props.onClick}
    >
      {props.title}
      {props.isSelected && (
        <button className="ml-2 hover:text-black" onClick={props.onClick}>
          &#10006;
        </button>
      )}
    </button>
  );
}

export default BoolButton;
