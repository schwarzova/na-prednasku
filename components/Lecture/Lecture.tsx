import React from 'react';

import { Lecture } from '../../types';
import Info from './Info';
import Tags from './Tags';
import Title from './Title';
import UrlLink from './UrlLink';

type Props = {
  lecture: Lecture;
};

function Lecture(props: Props) {
  const propagatedRing = props.lecture.isPropagated
    ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-red-400'
    : '';

  return (
    <div
      className={`flex flex-col bg-nabifli-black-card rounded-lg drop-shadow-md ${propagatedRing}`}
    >
      <Title
        isOnline={props.lecture.isOnline}
        isPropagated={props.lecture.isPropagated}
        title={props.lecture.title}
      />
      <div className="p-3 text-slate-400 flex flex-col justify-between h-full">
        <div className="font-light">{props.lecture.description}</div>
        <div>
          <div className="my-3 justify-between flex flex-col 2xl:flex-row">
            <Info
              location={props.lecture.location}
              date={props.lecture.date}
              price={props.lecture.price}
            />
            <Tags categories={props.lecture.categories} />
          </div>
          <UrlLink infoUrl={props.lecture.infoUrl} />
        </div>
      </div>
    </div>
  );
}

export default Lecture;
