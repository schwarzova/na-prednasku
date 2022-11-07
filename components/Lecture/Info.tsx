import React from 'react';

type Props = {
  location: string;
  date: string;
  price?: string;
};

export function getDate(date: string) {
  const dateArray = date.split('-');
  return `${dateArray[2]}.${dateArray[1]} ${dateArray[0]}`;
}

function Info(props: Props) {
  const date = getDate(props.date);

  function rederInfoRow(icon: string, text: string, value: string) {
    return (
      <div className="flex">
        <span className="w-5">{icon}</span>
        <span className="px-1">
          <b>{text} |</b>
        </span>
        {value}
      </div>
    );
  }

  return (
    <div>
      {rederInfoRow('🌍', 'Kde', props.location)}
      {rederInfoRow('🗓', 'Kdy', date)}
      {rederInfoRow('💰', 'Cena', props?.price ? props.price : 'zdarma')}
    </div>
  );
}

export default Info;
