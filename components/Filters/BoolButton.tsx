import React from 'react';

type Props = {
  isSelected: boolean;
  onClick: () => void;
  title: string;
  minWidth?: string;
};

function BoolButton(props: Props) {
  const notSelectedClasses = 'from-nabifli-black-card to-nabifli-black-card';
  const selectedClasses = 'from-indigo-700 to-red-500';
  const selectedClass = props.isSelected ? selectedClasses : notSelectedClasses;
  const minWidth = props.minWidth ? props.minWidth : '';

  return (
    <button
      className={`py-1.5 px-3 mr-2 mb-2 bg-gradient-to-r ${selectedClass} ${minWidth} rounded-full text-white text-left`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default BoolButton;
