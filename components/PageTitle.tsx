import React, { useEffect, useRef, useState } from 'react';

type Event = { title: string; color: string };

const events: Event[] = [
  { title: 'přednášku', color: 'text-green-500' },
  { title: 'konferenci', color: 'text-red-300' },
  { title: 'skvělou akci', color: 'text-yellow-400' },
  { title: 'webinář', color: 'text-cyan-300' },
  { title: 'meet up', color: 'text-rose-400' },
  { title: 'super event', color: 'text-blue-600' },
  { title: 'seminář', color: 'text-purple-600' },
];

function PageTitle() {
  const [event, setEvent] = useState<Event>(events[0]);
  const index = useRef(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setEvent(events[index.current]);

      if (index.current === events.length - 1) {
        index.current = 0;
      } else {
        index.current = index.current + 1;
      }
    }, 4000);

    return () => {
      clearInterval(intervalID);
    };
  });

  return (
    <h1 className={`text-white text-2xl uppercase`}>
      na <span className={`${event.color} animate-pulse`}>{event.title}</span>.
    </h1>
  );
}

export default PageTitle;
