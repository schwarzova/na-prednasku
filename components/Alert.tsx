import React from 'react';

type Props = {
  type: 'success' | 'danger';
  text: string;
};

function Alert(props: Props) {
  const colorsSuccess = 'bg-green-100 border-green-500 text-green-700';
  const colorsDanger = `bg-red-100 border-red-500 text-red-700`;
  const colors = props.type === 'success' ? colorsSuccess : colorsDanger;

  return (
    <div
      className={`${colors} border-l-4 p-4 fixed z-50 bottom-2 rounded-md mx-10`}
      role="alert"
    >
      <p>{props.text}</p>
    </div>
  );
}

export default Alert;
