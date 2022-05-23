import React, { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';

import Footer from '../components/Footer';
import Head from '../components/Head';
import Menu from '../components/Menu';
import Main from '../containers/Main';
import { Lecture } from '../types';
import { supabase } from '../utils/supabase';

type Props = {
  lectures: Lecture[];
};

const LECTURES: Lecture[] = [
  {
    categories: ['tech', 'marketing', 'business'],
    created_at: '2022-05-18T14:59:03+00:00',
    date: '2022-06-04',
    description:
      'Barcamp Ostrava je otevřená komunitní konference ze světa internetu. Zaměřena je především na nové trendy v internetových aplikacích a technologiích, webdesign, marketing, internetovou reklamu, digitální média a podnikání.',
    id: 4,
    infoUrl: 'https://www.barcampostrava.cz/',
    isOnline: false,
    isPropagated: true,
    location: 'Ostrava',
    price: 'zdarma',
    title: 'Barcamp Ostrava 2022 ',
  },
  {
    categories: ['osobní rozvoj', 'business'],
    created_at: '2022-05-18T14:36:07+00:00',
    date: '2022-06-07',
    description:
      'Oblíbený event Women’s Summit přirozeně propojuje ženy z Forbes žebříčku nejvlivnějších žen Česka s dosud neobjevenými tvářemi, které stojí za to poznat.',
    id: 1,
    infoUrl: 'https://forbes.cz/akce/womens-summit/',
    isOnline: false,
    isPropagated: true,
    location: 'Praha',
    price: 'CZK 1990–2790',
    title: 'Women’s summit 2022',
  },
  {
    categories: ['tech', 'nft'],
    created_at: '2022-05-18T15:04:35+00:00',
    date: '2022-06-08',
    description:
      'představení technologie – jak NFT funguje\nmožné benefity a výhody\nproblémy a triky NFT technologie',
    id: 5,
    infoUrl:
      'https://kalendar.vse.cz/event/show?date=2744&period=202206&web=www.vse.cz',
    isOnline: true,
    isPropagated: true,
    location: 'Praha',
    price: 'zdarma',
    title: 'Absolventská středa: NFT – The Next Big Thing or Just a Bubble?',
  },
  {
    categories: ['tech', 'ai'],
    created_at: '2022-05-18T14:55:02+00:00',
    date: '2022-05-24',
    description: 'Running custom neural networks in a browser',
    id: 3,
    infoUrl:
      'https://www.meetup.com/Brno-Software-Development-Meetup/events/285699294/',
    isOnline: true,
    isPropagated: false,
    location: 'Online',
    price: 'zdarma',
    title: 'Reactive Online Meetup|How to Design Complex Async apps',
  },
  {
    categories: ['krypto', 'finance'],
    created_at: '2022-05-18T14:50:36+00:00',
    date: '2022-06-04',
    description: 'KRYPTOMĚNOVÁ KONFERENCE',
    id: 2,
    infoUrl: 'https://utxo.cz/',
    isOnline: false,
    isPropagated: false,
    location: 'Praha',
    price: 'od 750 CZK',
    title: 'UTXO.22',
  },
];

function Home(props: Props) {
  const [lectures, setLectures] = useState(props.lectures);

  useEffect(() => {
    const sortedByDates = sortBy(lectures, ['date']);
    setLectures(sortBy(sortedByDates, (l) => !l.isPropagated));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head />
      <Menu />
      <Main lectures={lectures} />
      <Footer />
    </>
  );
}

export default Home;

export const getStaticProps = async () => {
  const { data: lectures } = await supabase.from('lecture').select('*');

  return {
    props: {
      lectures,
    },
  };
};
