/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Head from '../../../components/Head';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';
import BoolButton from '../../../components/Filters/BoolButton';
import { Record } from '../../../types';

const records: Record[] = [
  {
    title: 'Sokrates a probuzení duše',
    url: 'sokrates-duse',
    imgUrl: 'https://i.ibb.co/gTshPDS/sokrates.png',
  },
  {
    title: 'Data jako palivo pro AI',
    url: 'data-jako-palivo',
    imgUrl: 'https://i.ibb.co/R9YqVyf/data-Jako-Palivo.png',
  },
  {
    title: 'Dana Bérová: Co dělají úspěšné firmy jinak než ty ostatní?',
    url: 'dana-berova',
    imgUrl: 'https://i.ibb.co/znq8pGX/dana-Berova.png',
  },
  {
    title: 'Fromm - Umění milovat',
    url: 'fromm',
    imgUrl: 'https://i.ibb.co/rGxSB9L/fromm.png',
  },
  {
    title: 'Echo z Knihovny: Cenzura v době svobody',
    url: 'cenzura',
    imgUrl: 'https://i.ibb.co/W5ZDtm4/svoboda.png',
  },
  {
    title: 'Tao - přednáška',
    url: 'tao',
    imgUrl: 'https://i.ibb.co/X2QJQrc/tao.png',
  },
  {
    title: 'Jak umělá inteligence změní trh práce a jak toho využít?',
    url: 'ai-trh',
    imgUrl: 'https://i.ibb.co/WtVF3Ww/aitrh.png',
  },
  {
    title: 'Duchové a mimozemšťani - Co mají společného?',
    url: 'duchove-mimozemstani',
    imgUrl: 'https://i.ibb.co/28pYxFH/duchove.png',
  },
  {
    title: 'Figma do hloubky',
    url: 'figma',
    imgUrl: 'https://i.ibb.co/nbxc1d9/figma.png',
  },
  {
    title: 'Rozhovor s Dominikem Ženatým o investování do nemovitostí',
    url: 'nemovitosti',
    imgUrl: 'https://i.ibb.co/Dzd2Rq9/investnemovitosti.png',
  },
  {
    title: 'Claire Kroulík Klingenberg: Příběhy profesionálních podvodníků',
    url: 'podvodnici',
    imgUrl: 'https://i.ibb.co/hZrVfvj/podvodnici.png',
  },
  {
    title: 'Techniky komunikace na sociálních sítích',
    url: 'komunikace-socialni-site',
    imgUrl: 'https://i.ibb.co/jwH3dvq/komunikacesocial.png',
  },
  {
    title: 'Alfons Mucha - umělec a filozof',
    url: 'mucha',
    imgUrl: 'https://i.ibb.co/yy1Nw7M/mucha.png',
  },
  {
    title: 'Cloud a AI - jak s nimi bezpečně pracovat?',
    url: 'cloud-ai',
    imgUrl: 'https://i.ibb.co/YpjdPFD/cloudai.png',
  },
  {
    title: 'Debata N: Pořádek v hlavě aneb kritické myšlení pro každý den',
    url: 'poradek-hlava',
    imgUrl: 'https://i.ibb.co/T43MmY3/poradek-hlava.png',
  },
  {
    title: 'Artificial Intelligence - konference',
    url: 'ai-conf',
    imgUrl: 'https://i.ibb.co/vJdPjWx/conference-ai.png',
  },
  {
    title:
      'Block 23 - konference o posledních trendech blockchainové technologie',
    url: 'block-23',
    imgUrl: 'https://i.ibb.co/ZSBRfwz/blockchain-conf.png',
  },
  {
    title: 'Mýty o domácím násilí',
    url: 'myty-domaci-nasili',
    imgUrl: 'https://i.ibb.co/tZ3PHpj/myty-o-nasili.png',
  },
  {
    title: 'Na penězích záleží: jak úspěšně řídit rodinný rozpočet',
    url: 'rozpocet',
    imgUrl: 'https://i.ibb.co/84fSxdQ/rozpocet.png',
  },
  {
    title: 'Spartánské učení o strachu',
    url: 'spartanske-uceni',
    imgUrl: 'https://i.ibb.co/vVfFb2R/prednaska.png',
  },
  {
    title: 'Jak vytvořit unicorna',
    url: 'unicorn',
    imgUrl: 'https://i.ibb.co/HYxxszd/unicorn.png',
  },
  {
    title: 'Koruna nebo EURO',
    url: 'koruna-euro',
    imgUrl: 'https://i.ibb.co/Ctx44cD/prednaska.png',
  },
  {
    title: 'Jak pracovat se vztekem',
    url: 'vztek',
    imgUrl: 'https://i.ibb.co/txn7cKR/vztek.png',
  },
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
        <Link href={`/zaznamy`} passHref>
          <BoolButton title="🗓️ 2024" isSelected={false} onClick={() => {}} />
        </Link>
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
