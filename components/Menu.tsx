import React from 'react';

function Menu() {
  return (
    <nav className="px-3 bg-nabifli-black-card h-14 flex items-center justify-between sm:px-10 sm:h-16">
      <span className="text-slate-400">NÁVŠTĚV DNES | 103</span>
      <button className="p-1 ring-2 ring-offset-1 ring-offset-purple-700 ring-purple-600 bg-gradient-to-r from-green-700 to-red-500 rounded-lg text-white hover:from-green-700 hover:to-green-700 sm:p-2">
        🚀 <b>Vytvořit událost</b>
      </button>
    </nav>
  );
}

export default Menu;
