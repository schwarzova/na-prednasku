/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Head from '../../components/Head';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BoolButton from '../../components/Filters/BoolButton';
import { Record } from '../../types';

const records: Record[] = [
  {
    title: 'Kovy - v kůži youtubera',
    url: 'v-kuzi-youtubera',
    imgUrl:
      'https://i.ibb.co/Y8twdkj/326152999-1866451520362265-1645163351453897699-n.jpg',
  },
  {
    title: 'Televize a její role v marketingu',
    url: 'televize-marketing',
    imgUrl: 'https://i.ibb.co/FwZznbx/tv.jpg',
  },
  {
    title:
      'Malý princ - tento příběh není jen pro děti, každý v něm nachází poučení',
    url: 'maly-princ',
    imgUrl: 'https://i.ibb.co/MGxtsTz/mp.jpg',
  },
];

function Zaznamy() {
  return (
    <>
      <Head />
      <Menu showHome />
      <main className="px-4 pt-5 pb-20 bg-nabifli-black min-h-[calc(100%_-_64px_-_64px)] 2xl:px-20 sm:px-5">
        <BoolButton title="🗓️ 2023" isSelected onClick={() => {}} />
        <div className="bg-nabifli-black-card rounded-lg drop-shadow-md mt-6 p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 sm:gap-6">
          {records.map((r) => (
            <Link key={r.title} href={`/zaznamy/2023/${r.url}`}>
              <img
                className="transition ease-in-out delay-150 hover:-translate-y-1"
                src={r.imgUrl}
                alt={r.title}
                width="230"
                height="230"
              ></img>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Zaznamy;
