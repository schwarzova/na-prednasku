import React, { useEffect, useState } from 'react';
import Alert from './Alert';
import CreateModal from './CreateModal/CreateModal';

function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined;

    if (isAlertOpen) {
      timeoutId = setTimeout(() => {
        setIsAlertOpen(false);
      }, 4000);
    }

    if (isErrorAlertOpen) {
      timeoutId = setTimeout(() => {
        setIsErrorAlertOpen(false);
      }, 4000);
    }

    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [isAlertOpen, isErrorAlertOpen]);

  function handleCreate() {
    setIsModalOpen(false);
    setIsAlertOpen(true);
  }

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleError() {
    setIsErrorAlertOpen(true);
  }

  return (
    <>
      <nav className="px-3 bg-nabifli-black-card h-14 flex items-center justify-between sm:px-10 sm:h-16">
        <span className="text-slate-400">NÁVŠTĚV DNES | 103</span>
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="p-1 ring-2 ring-offset-1 ring-offset-purple-700 ring-purple-600 bg-gradient-to-r from-green-700 to-red-500 rounded-lg text-white hover:from-green-700 hover:to-green-700 sm:p-2"
        >
          🚀 <b>Vytvořit událost</b>
        </button>
      </nav>
      {isModalOpen && (
        <CreateModal
          onCreate={handleCreate}
          onClose={handleClose}
          onError={handleError}
        />
      )}
      {isAlertOpen && (
        <Alert
          color="green"
          text="Vaše událost byla vytvořena a poslána k nám na kontrolu 👍"
        />
      )}
      {isErrorAlertOpen && (
        <Alert
          color="red"
          text="Něco se pokazilo, Vaše událost se nepodařilo odeslat 👎"
        />
      )}
    </>
  );
}

export default Menu;
