import React from 'react';

type Props = {
  color: string;
  text: string;
};

function Alert(props: Props) {
  const colors = `bg-${props.color}-100 border-${props.color}-500 text-${props.color}-700`;

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
