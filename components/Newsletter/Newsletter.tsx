import React, { useState } from 'react';
import Alert from '../Alert';
import Title from '../Lecture/Title';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);

  function handleEmailSubmit() {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (email === '' || !regex.test(email)) {
      return;
    }

    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    }).then((res) => {
      if (res.status === 200) {
        setEmail('');
        setIsAlertOpen(true);
        setTimeout(function () {
          setIsAlertOpen(false);
        }, 5000);
      }
      if (res.status === 500) {
        setIsErrorAlertOpen(true);
        setTimeout(function () {
          setIsErrorAlertOpen(false);
        }, 5000);
      }
    });
  }

  return (
    <>
      <div className={`col-span-full flex justify-center`}>
        <div className="bg-nabifli-black-card rounded-lg drop-shadow-md ring-2 ring-green-500 ring-offset-2 ring-offset-green-400">
          <Title
            isOnline={false}
            isPropagated={false}
            title={'Newsletter'}
            isNewsletter
          />
          <div className="p-3 text-slate-400 flex flex-col justify-between">
            Přihlaště se k odběru nedělního newsletteru, kde Vám zašleme seznam
            nejzajímavějších akcí na následující týden.
            <input
              type="email"
              id="email"
              placeholder="Email..."
              className={`py-1.5 px-5 mr-2 my-3 bg-gradient-to-r from-nabifli-black-card to-nabifli-black-card rounded-full text-white flex justify-between h-[36px] outline outline-offset-2 outline-1 outline-purple-800 focus:outline-purple-600`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleEmailSubmit}
              className="px-3 py-1 bg-gradient-to-r from-indigo-700 to-red-500 rounded-lg text-white hover:from-indigo-700 hover:to-indigo-700 focus:outline outline-offset-2 outline-1 outline-purple-600"
            >
              Přihlásit k odběru newsletteru
            </button>
          </div>
        </div>
      </div>
      {isAlertOpen && (
        <Alert
          type="success"
          text="Váš email byl přihlášen k odběru newsletteru 👍"
        />
      )}
      {isErrorAlertOpen && (
        <Alert
          type="danger"
          text="Něco se pokazilo, Váš email se nepodařilo odeslat 👎"
        />
      )}
    </>
  );
}

export default Newsletter;
