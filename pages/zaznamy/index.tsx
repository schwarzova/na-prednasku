/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Head from '../../components/Head';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BoolButton from '../../components/Filters/BoolButton';

function Zaznamy() {
  return (
    <>
      <Head />
      <Menu showHome />
      <main className="px-4 pt-5 pb-20 bg-nabifli-black min-h-[calc(100%_-_64px_-_64px)] 2xl:px-20 sm:px-5">
        <BoolButton title="🗓️ 2023" isSelected onClick={() => {}} />
        <div className="flex flex-col bg-nabifli-black-card rounded-lg drop-shadow-md mt-6 p-4">
          <table className="text-slate-400">
            <tr className="hover:bg-slate-900 border-b border-slate-400">
              <td className="rounded-l-lg p-2 w-1/6">Únor</td>
              <td className="rounded-r-lg p-2">-</td>
            </tr>
            <tr className="rounded-lg hover:bg-slate-900">
              <td className="rounded-l-lg p-2 w-1/6">Leden</td>
              <td className="rounded-r-lg p-2 flex">
                <Link href="/zaznamy/2023/maly-princ">
                  <img
                    className="transition ease-in-out delay-150 hover:-translate-y-1"
                    src="https://i.ibb.co/MGxtsTz/mp.jpg"
                    alt="Malý princ - tento příběh není jen pro děti, každý v něm nachází poučení"
                    width="230"
                    height="230"
                  ></img>
                </Link>
                <Link href="/zaznamy/2023/televize-marketing" className="ml-6">
                  <img
                    className="transition ease-in-out delay-150 hover:-translate-y-1"
                    src="https://i.ibb.co/FwZznbx/tv.jpg"
                    alt="Lamp"
                    width="230"
                    height="230"
                  ></img>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Zaznamy;
