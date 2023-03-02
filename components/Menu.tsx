import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getPageViews } from '../pages/api/goat-counter';

import Alert from './Alert';
import CreateModal from './CreateModal/CreateModal';

type Props = {
  showHome?: boolean;
};

function Menu(props: Props) {
  const [views, setViews] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

  useEffect(() => {
    async function fetchView() {
      const viewsCount = await getPageViews();
      setViews(Number(viewsCount) + 60);
    }
    fetchView();
  }, []);

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
      <nav className="px-3 bg-nabifli-black-card h-14 flex items-center justify-between sm:pr-10 sm:pl-8 sm:h-16">
        <div className="flex items-center hidden sm:flex">
          <a href="https://www.nabifli.cz/" className="mt-2 hidden sm:block">
            <Image
              src="/naPrednasku.svg"
              alt="logo image"
              width={50}
              height={50}
              style={{ height: '50px' }}
            />
          </a>
          <span className="ml-1 text-slate-400">{`NÁVŠTĚV TÝDEN | ${views}`}</span>
        </div>
        {props.showHome ? (
          <Link
            href="/"
            className="p-1 text-slate-400 rounded-lg text-white sm:p-2"
          >
            🔮 <b className="hover:underline">Aktuální přednášky</b>
          </Link>
        ) : (
          <Link
            href="/zaznamy"
            className="p-1 text-slate-400 rounded-lg text-white sm:p-2"
          >
            🗄️ <b className="hover:underline">Záznamy přednášek</b>
          </Link>
        )}
        <button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className="p-1 ring-2 ring-offset-1 ring-offset-purple-700 ring-purple-600 bg-gradient-to-r from-green-700 to-red-500 rounded-lg text-white hover:from-green-700 hover:to-green-700 sm:p-2"
        >
          🚀{' '}
          <b>
            Vytvořit <span className="hidden sm:inline">událost</span>
          </b>
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
          type="success"
          text="Vaše událost byla vytvořena a poslána k nám na kontrolu 👍"
        />
      )}
      {isErrorAlertOpen && (
        <Alert
          type="danger"
          text="Něco se pokazilo, Vaší událost se nepodařilo odeslat 👎"
        />
      )}
    </>
  );
}

export default Menu;
