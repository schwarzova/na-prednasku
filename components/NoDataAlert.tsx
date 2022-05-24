import React from 'react';

function NoDataAlert() {
  return (
    <div
      className="bg-purple-100 border-l-4 border-purple-500 text-purple-700 p-4 xl:w-5/6"
      role="alert"
    >
      <p>Žádné akce nenalezeny 😿</p>
    </div>
  );
}

export default NoDataAlert;
