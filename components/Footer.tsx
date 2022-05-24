import React from 'react';

function Footer() {
  return (
    <footer className="px-3 py-5 bg-neutral-900 text-slate-400 sm:px-10 flex flex-col justify-between sm:flex-row">
      info@nabifli.cz
      <a
        className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-red-400 hover:from-indigo-600 hover:to-indigo-600"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        instagram
      </a>
      <span className="text-sm mt-5 sm:mt-0">
        made by{' '}
        <a
          className="text-white"
          href="https://www.venetia.cz/"
          target="_blank"
          rel="noreferrer"
        >
          Venetia Production
        </a>
      </span>
    </footer>
  );
}

export default Footer;
