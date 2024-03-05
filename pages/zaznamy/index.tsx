/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Head from '../../components/Head';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BoolButton from '../../components/Filters/BoolButton';
import { Record } from '../../types';

const records: Record[] = [
  {
    title: 'Novinky v AI a co nás čeká v roce 2024',
    url: 'ai-2024',
    imgUrl: 'https://i.ibb.co/G2W4kkm/ai2024.png',
  },
  {
    title: 'Genealogie pro každého - Lán, tolar a hladomor',
    url: 'lan-tolar-hladomor',
    imgUrl: 'https://i.ibb.co/bQ1ydk3/lan-Tolar-Hladomor.png',
  },
  {
    title: 'Debata N: Zvolil si Tchaj-wan Čínu?',
    url: 'tchaj-wan',
    imgUrl: 'https://i.ibb.co/Wc6r13v/prednaska.png',
  },
  {
    title: 'Namočíme vás do DIPu',
    url: 'do-dipu',
    imgUrl: 'https://i.ibb.co/h13LZ8G/prednaska-1.png',
  },
];

function Zaznamy() {
  return (
    <>
      <Head />
      <Menu showHome />
      <main className="px-4 pt-5 pb-20 bg-nabifli-black min-h-[calc(100%_-_64px_-_64px)] 2xl:px-20 sm:px-5">
        <Link href={`/zaznamy/2023`} passHref>
          <BoolButton title="🗓️ 2023" isSelected={false} onClick={() => {}} />
        </Link>
        <BoolButton title="🗓️ 2024" isSelected onClick={() => {}} />
        <div className="bg-nabifli-black-card rounded-lg drop-shadow-md mt-6 p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 sm:gap-6">
          {records.map((r) => (
            <Link key={r.title} href={`/zaznamy/2024/${r.url}`}>
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
