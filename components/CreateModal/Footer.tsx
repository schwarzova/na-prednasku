import React from 'react';

type Props = {
  onClose: () => void;
  onSubmitClick: () => void;
};

function Footer(props: Props) {
  return (
    <div className="bg-nabifli-black px-4 py-3 flex justify-end text-white">
      <button
        onClick={props.onClose}
        className="mr-2 px-3 py-1 bg-nabifli-black-card rounded-lg text-white hover:bg-gray-800 focus:outline outline-offset-2 outline-1 outline-purple-600"
      >
        Zavřít
      </button>
      <button
        onClick={props.onSubmitClick}
        className="px-3 py-1 bg-gradient-to-r from-indigo-700 to-red-500 rounded-lg text-white hover:from-indigo-700 hover:to-indigo-700 focus:outline outline-offset-2 outline-1 outline-purple-600"
      >
        Vytvořit
      </button>
    </div>
  );
}

export default Footer;
