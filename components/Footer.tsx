import React from 'react';

function Footer() {
  return (
    <footer className="px-3 py-5 bg-neutral-900 text-slate-400 sm:px-10 flex flex-col justify-between sm:flex-row">
      {/* info@nabifli.cz */}
      <div className="flex">
        <a
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-600 hover:to-blue-600"
          href="https://twitter.com/na_prednasku"
          target="_blank"
          rel="noreferrer"
        >
          twitter
        </a>
        <a
          className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-red-400 hover:from-indigo-600 hover:to-indigo-600 mx-5"
          href="https://www.instagram.com/naprednasku/"
          target="_blank"
          rel="noreferrer"
        >
          instagram
        </a>
        <a
          className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-400 hover:from-yellow-400 hover:to-yellow-400"
          href="http://eepurl.com/ic63M5"
          target="_blank"
          rel="noreferrer"
        >
          newsletter
        </a>
      </div>
      <span className="text-sm mt-5 sm:mt-0">
        {/* made by{' '}
        <a
          className="text-white"
          href="https://www.venetia.cz/"
          target="_blank"
          rel="noreferrer"
        >
          Venetia Production
        </a> */}
      </span>
    </footer>
  );
}

export default Footer;
