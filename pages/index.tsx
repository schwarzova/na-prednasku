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

function Home(props: Props) {
  const [lectures, setLectures] = useState(props.lectures);

  const today = new Date();
  const formattedToday = today.toISOString().substr(0, 10);

  useEffect(() => {
    const filterCurrent = lectures.filter((l) => l.date >= formattedToday);
    const sortedByDates = sortBy(filterCurrent, ['date']);
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
