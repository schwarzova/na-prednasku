import React, { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';

import { Lecture } from '../types';
import { supabase } from '../utils/supabase';
import { getDate } from '../components/Lecture/Info';

type Props = {
  lectures: Lecture[];
};

function Home(props: Props) {
  const today = new Date();
  const formattedToday = today.toISOString().substr(0, 10);

  const [lectures, setLectures] = useState(props.lectures);
  const [from, setFrom] = useState(formattedToday);
  const [to, setTo] = useState(formattedToday);

  useEffect(() => {
    const filterCurrent = props.lectures.filter(
      (l) => l.date >= from && l.date <= to
    );
    const sortedByDates = sortBy(filterCurrent, ['date']);
    setLectures(sortBy(sortedByDates, (l) => !l.isPropagated));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, to]);

  function getFormattedDate(date: string) {
    const dateObject = new Date(date);

    return `${dateObject.getDate()}.${dateObject.getMonth() + 1}.`;
  }

  return (
    <div className="p-4 bg-nabifli-black min-h-full">
      <h1 className="text-green-500">Generator</h1>
      <div className="flex">
        <div className="mr-3">
          <label htmlFor="od" className="text-white text-sm ml-3">
            Od
          </label>
          <input
            id="od"
            className={`py-1.5 px-5 bg-nabifli-black-card rounded-full text-white flex focus:outline outline-offset-2 outline-1 outline-purple-600`}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            type="date"
          />
        </div>
        <div>
          <label htmlFor="do" className="text-white text-sm ml-3">
            Do
          </label>
          <input
            id="do"
            className={`py-1.5 px-5 bg-nabifli-black-card rounded-full text-white flex focus:outline outline-offset-2 outline-1 outline-purple-600`}
            value={to}
            onChange={(e) => setTo(e.target.value)}
            type="date"
          />
        </div>
      </div>
      <div className="mt-10 text-yellow-300">
        {lectures.map(
          (l, i) =>
            `${
              i % 2 === 0
                ? `<div class="flex${
                    i === lectures.length - 1 ? ' last' : ''
                  }">`
                : ''
            }<div class="card${
              l.isPropagated ? ' hot' : ''
            }"><div class="card-title">${l.title}${
              l.isOnline || l.isPropagated
                ? `<div class="flexx">${
                    l.isOnline ? '<span title="online událost">🟢</span>' : ''
                  }${
                    l.isPropagated
                      ? '<div title="doporučená událost">🔥</div>'
                      : ''
                  }</div>`
                : ''
            }</div><div class="card-body"><div class="card-body-description">${
              l.description
            }</div><div class="card-body-middle"><div class="flex"><span class="w-5">🌍</span><span class="px-1"><b>Kde |</b></span>${
              l.location
            }</div>
            <div class="flex"><span class="w-5">🗓</span><span class="px-1"><b>Kdy |</b></span>${getDate(
              l.date
            )}</div>
            <div class="flex"><span class="w-5">💰</span><span class="px-1"><b>Cena |</b></span>${
              l.price ? l.price : 'zdarma'
            }</div>${
              l.categories.length > 0
                ? `<div class="categories">${l.categories
                    .map((c) => `<div class="cat-item">#${c}</div>`)
                    .join(' ')}</div>`
                : ''
            }<a class="card-link" href="${
              l.infoUrl
            }" target="_blank" rel="noreferrer">Odkaz na událost</a></div></div></div>${
              i % 2 !== 0 || i === lectures.length - 1 ? '</div>' : ''
            }`
        )}
      </div>
      <div className="mt-10 text-blue-300">
        {`🎓 Přednášky týden ${getFormattedDate(from)} - ${getFormattedDate(
          to
        )}`}
        <br />
        {lectures.map((l) => (
          <>
            {l.isPropagated ? '🔥' : '📍'} {getFormattedDate(l.date)} -{' '}
            {l.title}
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;

export const getStaticProps = async () => {
  const { data: lectures } = await supabase.from('lecture').select('*');

  return {
    props: {
      lectures,
    },
    revalidate: 3600, // rerun after 1 hour
  };
};
